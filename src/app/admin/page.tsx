export default function AdminPage() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#f9fafb'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1f2937' }}>
        Tina CMS Admin
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.2rem' }}>
        Content management interface for Illuminate Avenue
      </p>
      <div style={{
        padding: '20px',
        backgroundColor: '#fef3c7',
        border: '1px solid #f59e0b',
        borderRadius: '8px',
        marginBottom: '2rem',
        maxWidth: '500px'
      }}>
        <p style={{ color: '#92400e', margin: 0 }}>
          🚧 Tina CMS is being configured. Full admin functionality will be available soon.
        </p>
      </div>
      <button 
        style={{
          padding: '12px 24px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.2s'
        }}
        onClick={() => {
          window.location.href = '/'
        }}
      >
        ← Back to Site
      </button>
    </div>
  )
}