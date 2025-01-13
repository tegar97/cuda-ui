'use client'
import { useState } from 'react';
import ReactCompareImage from 'react-compare-image';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [processedImages, setProcessedImages] = useState<{ className: string, original: string, processed: string }[]>([]);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [blurParameter, setBlurParameter] = useState(0.3);
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">

      <nav className="w-full mb-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">CUDA</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://arxiv.org/pdf/2303.04278" className="flex items-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.5v3.5h-1.5v-3.5h-1.5v-1.5h4.5v1.5zm3 8.5c0 .552-.448 1-1 1h-10c-.552 0-1-.448-1-1v-7h1.5v4.5h1.5v-4.5h1.5v4.5h1.5v-4.5h1.5v4.5h1.5v-4.5h1.5v7zm-6-11.5h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5z"/>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">Paper Reference</span>
            </a>
           
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto  mt-32">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4 tracking-tight">
            Convolution-based Unlearnable Dataset (CUDA)
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            Protect Your Images from AI Training While Preserving Visual Quality
          </p>
        </div>

        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-10 mb-12 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-center mb-12">
            <nav className="flex space-x-6 p-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-xl ">
              {['about', 'how-it-works', 'try-it'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-lg transition-all duration-300 text-lg font-medium ${
                    activeTab === tab
                      ? 'bg-white dark:bg-gray-600 shadow-md text-blue-600 dark:text-blue-400 transform scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600/50 hover:scale-102'
                  }`}
                >
                  {tab === 'about' ? 'About' :
                   tab === 'how-it-works' ? 'How It Works' :
                   'Try It Now'}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'about' && (
            <div className="space-y-12 animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Protecting Visual Privacy in the AI Era
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 p-8 bg-blue-50/50 dark:bg-gray-700/30 rounded-2xl border border-blue-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Case Study: Digital Art Protection</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Maya, a renowned digital artist, faced a serious problem when her unique artwork was used without permission to train AI models. These models produced imitations that mimicked her style, negatively impacting her reputation and income. With our adversarial defense solution, artists like Maya can protect their work from AI model misuse while maintaining its original visual beauty.
                  </p>
                </div>
                <div className="space-y-6 p-8 bg-purple-50/50 dark:bg-gray-700/30 rounded-2xl border border-purple-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">Key Benefits</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-4 text-lg">
                    <li className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Protects datasets from unauthorized use by AI models</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Preserves data privacy while maintaining visual quality</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Applies efficient convolution-based perturbations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ensures generalization across various ML models</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                  Our Team - Kelompok 1
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {name: "Rifqi Lukmansyah", id: "15-2021-115"},
                    {name: "Muhammad Tegar Akmal", id: "15-2021-114"},
                    {name: "Yoga Ramadan", id: "15-2021-126"},
                    {name: "Muhammad Miftah Nugraha", id: "15-2021-106"}
                  ].map((member, index) => (
                    <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="font-medium text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{member.id}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'how-it-works' && (
            <div className="space-y-12 animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                CUDA-Based Protection Workflow
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                    Input Cleaning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    Initial preprocessing of input pairs (x, y) prepares the data for protection. The cleaning phase ensures consistent image formatting and normalizes input ranges for optimal filter application.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 text-center">
                    Filter Generation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    Generates class-specific filters sy using uniform distribution U(0, pb). The k×k filter (k=3) creates a randomized protection pattern unique to each class y.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 text-center">
                    Convolution Application
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    Applies convolution operation (★) between input x and filter sy to produce x'. Final normalization ensures output maintains visual quality.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'try-it' && (
            <div className="animate-fadeIn">
              <div className="mb-12 max-w-2xl mx-auto">
                <label htmlFor="blur-parameter" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Perturbasi Value (p)
                </label>
                <div className="flex items-center space-x-6 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <input
                    type="range"
                    id="blur-parameter"
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer dark:bg-blue-900"
                    value={blurParameter}
                    onChange={(e) => setBlurParameter(Number(e.target.value))}
                    step="0.1"
                    min="0"
                    max="1"
                  />
                  <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400 w-16">{blurParameter}</span>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                  Higher values provide stronger protection but may affect visual quality
                </p>
              </div>

              <div className="border-3 border-dashed border-blue-200 dark:border-blue-900 rounded-2xl p-16 text-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 shadow-inner">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".zip"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setIsLoading(true);
                      const formData = new FormData();
                      formData.append('file', file);
                      formData.append('blur_parameter', blurParameter.toString());

                      fetch('http://13.250.1.171:8000/upload-zip/', {
                        method: 'POST',
                        body: formData,
                        mode: 'cors',
                        headers: {
                          'Accept': 'application/json',
                        }
                      })
                        .then(response => response.json())
                        .then(data => {
                          const comparisons = data.samples.map((item: {
                            class_name: string,
                            original_image: string,
                            filtered_image: string
                          }) => ({
                            className: item.class_name,
                            original: `http://13.250.1.171:8000${item.original_image}`,
                            processed: `http://13.250.1.171:8000${item.filtered_image}`
                          }));
                          setProcessedImages(comparisons);
                          setDownloadLink(`http://13.250.1.171:8000${data.download_url}`);
                          setIsLoading(false);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          alert('An error occurred while processing the file');
                          setIsLoading(false);
                        });
                    }
                  }}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer block"
                >
                  <div className="flex flex-col items-center">
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-6"></div>
                    ) : (
                      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                        <svg
                          className="w-10 h-10 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                    )}
                    <span className="text-2xl text-blue-600 dark:text-blue-400 mb-4 font-medium">
                      {isLoading ? 'Processing...' : 'Upload Your Images (ZIP)'}
                    </span>
                    {!isLoading && (
                      <span className="text-gray-500 dark:text-gray-400">
                        Drag and drop or click to select
                      </span>
                    )}
                  </div>
                </label>
              </div>

              {processedImages.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Results Comparison
                  </h2>
                  <div className="grid grid-cols-1 gap-16">
                    {processedImages.map((image, index) => (
                      <div key={index} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 text-center">
                          {image.className}
                        </h3>
                        <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-600">
                          <ReactCompareImage
                            leftImage={image.original}
                            rightImage={image.processed}
                            leftImageLabel="Original"
                            rightImageLabel="Protected"
                            sliderPositionPercentage={0.5}
                            handle={
                              <div className="w-1 h-full bg-blue-500 shadow-xl"></div>
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {downloadLink && (
                <div className="mt-12 text-center">
                  <a
                    href={downloadLink}
                    download
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Results
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
