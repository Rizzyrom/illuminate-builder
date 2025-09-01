export default function MaintenancePage() {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

  if (isMaintenanceMode) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        <div className="text-center text-white p-8 max-w-md">
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Under Maintenance</h1>
          <p className="text-gray-300 mb-6">
            We&apos;re currently updating our website to serve you better. 
            Please check back soon!
          </p>
          
          <div className="text-sm text-gray-400">
            For urgent inquiries, contact us at:{' '}
            <a
              href="mailto:hello@illuminateavenue.com"
              className="text-blue-400 hover:underline"
            >
              hello@illuminateavenue.com
            </a>
          </div>

          <div className="mt-8">
            <div className="animate-spin w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center py-20">
        Welcome to Illuminate Avenue
      </h1>
      <p className="text-center text-gray-600">
        Your site will load here when maintenance mode is disabled.
      </p>
    </div>
  )
}
