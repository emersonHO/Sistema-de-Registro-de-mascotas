import { useLocation, Link } from 'react-router-dom';

export default function QuickNav() {
  const location = useLocation();
  
  const navItems = [
    {
      path: '/',
      name: 'Registro',
      icon: '📝',
      description: 'Agregar y gestionar perros'
    },
    {
      path: '/public',
      name: 'Dashboard',
      icon: '📊',
      description: 'Ver estadísticas públicas'
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            style={{
              background: isActive 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : 'rgba(255, 255, 255, 0.9)',
              color: isActive ? 'white' : '#333',
              padding: '12px 16px',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '140px',
              opacity: isActive ? 1 : 0.8
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.opacity = '1';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.opacity = '0.8';
              }
            }}
            title={item.description}
          >
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}