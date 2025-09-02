"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the content files for direct editing
    window.location.href = "https://github.com/Rizzyrom/illuminate-builder/tree/main/content";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Content Management System
          </h1>
          <p className="text-gray-600 mb-6">
            Redirecting to GitHub for content editing...
          </p>
          <div className="animate-spin w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full mx-auto"></div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Manual access to content files:
            </p>
            <div className="space-y-2">
              <a 
                href="https://github.com/Rizzyrom/illuminate-builder/edit/main/content/pages/home.json"
                className="block text-blue-600 hover:text-blue-800 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit Homepage Content
              </a>
              <a 
                href="https://github.com/Rizzyrom/illuminate-builder/edit/main/content/pages/about.json"
                className="block text-blue-600 hover:text-blue-800 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit About Page
              </a>
              <a 
                href="https://github.com/Rizzyrom/illuminate-builder/edit/main/content/pages/services.json"
                className="block text-blue-600 hover:text-blue-800 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit Services Page
              </a>
              <a 
                href="https://github.com/Rizzyrom/illuminate-builder/edit/main/content/global/index.json"
                className="block text-blue-600 hover:text-blue-800 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit Global Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}