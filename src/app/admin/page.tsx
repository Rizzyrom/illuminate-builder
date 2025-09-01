'use client'

import dynamic from 'next/dynamic'

const TinaEditProvider = dynamic(() => import('tinacms/dist/edit-state').then((mod) => mod.TinaEditProvider), {
  ssr: false,
})

export default function AdminPage() {
  return (
    <TinaEditProvider
      editMode={
        <div style={{ position: 'relative', zIndex: 1000, height: '100vh' }}>
          <div style={{ 
            height: '100%', 
            overflow: 'auto',
            // Tina admin styles
            fontFamily: 'system-ui, sans-serif'
          }}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>Tina CMS Admin</h1>
              <p>Loading admin interface...</p>
            </div>
          </div>
        </div>
      }
    >
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Tina CMS Admin</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Content management interface for Illuminate Avenue
        </p>
        <button 
          style={{
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => {
            // This would normally trigger Tina edit mode
            alert('Tina CMS admin interface would load here')
          }}
        >
          Enter Admin Mode
        </button>
      </div>
    </TinaEditProvider>
  )
}