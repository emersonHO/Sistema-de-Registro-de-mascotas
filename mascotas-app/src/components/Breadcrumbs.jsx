import { useLocation, Link } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  
  const getBreadcrumbs = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return [
        { name: 'Inicio', path: '/', icon: '🏠' }
      ];
    } else if (path === '/public') {
      return [
        { name: 'Inicio', path: '/', icon: '🏠' },
        { name: 'Dashboard Público', path: '/public', icon: '📊' }
      ];
    }
    
    return [];
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '12px 24px',
      marginBottom: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        color: '#666'
      }}>
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.path} style={{ display: 'flex', alignItems: 'center' }}>
            {index > 0 && (
              <span style={{ margin: '0 8px', color: '#ccc' }}>›</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span style={{
                color: '#667eea',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                {crumb.icon} {crumb.name}
              </span>
            ) : (
              <Link
                to={crumb.path}
                style={{
                  color: '#666',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.3s ease',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f0f0';
                  e.target.style.color = '#333';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#666';
                }}
              >
                {crumb.icon} {crumb.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}