"use client";

import { useState } from 'react';

export default function AdminPage() {
  const [selectedFile, setSelectedFile] = useState('home');
  
  const contentFiles = [
    { id: 'home', label: 'Homepage', path: '/content/pages/home.json' },
    { id: 'about', label: 'About Page', path: '/content/pages/about.json' },
    { id: 'services', label: 'Services Page', path: '/content/pages/services.json' },
    { id: 'work', label: 'Work Page', path: '/content/pages/work.json' },
    { id: 'strategy', label: 'Strategy Page', path: '/content/pages/strategy.json' },
    { id: 'insights', label: 'Insights Page', path: '/content/pages/insights.json' },
    { id: 'global', label: 'Global Settings', path: '/content/global/index.json' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Illuminate Avenue CMS</h1>
              <p className="text-gray-600">Edit your website content</p>
            </div>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View Website →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Content Files</h2>
              </div>
              <nav className="p-2">
                {contentFiles.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => setSelectedFile(file.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedFile === file.id
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {file.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Edit {contentFiles.find(f => f.id === selectedFile)?.label}
                </h2>
                <p className="text-gray-600 mt-1">
                  Click the button below to edit this content file directly in GitHub
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-center py-12">
                  <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Ready to Edit Content
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Edit the JSON content file for {contentFiles.find(f => f.id === selectedFile)?.label.toLowerCase()}. 
                    Changes will be reflected on your website immediately after saving.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`https://github.com/Rizzyrom/illuminate-builder/edit/main${contentFiles.find(f => f.id === selectedFile)?.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                      </svg>
                      Edit in GitHub
                    </a>
                    
                    <div className="text-sm text-gray-500">
                      <p>Your content files are stored as JSON. Edit the values to change your website content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">How to Edit Content</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Click "Edit in GitHub" to open the content file</li>
                      <li>Edit the text values between quotes (e.g., "title": "Your New Title")</li>
                      <li>Click "Commit changes" to save</li>
                      <li>Your website will update automatically within minutes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}