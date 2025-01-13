# Step 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files
COPY . .

# Build the Next.js application
RUN npm run build

# Remove devDependencies to reduce image size
RUN npm prune --production

# Step 2: Run the application
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Set environment variables for production
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
