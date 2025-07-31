import { useAuth } from '../contexts/AuthContext';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isDashboard = location.pathname === '/';
  const isPublicDashboard = location.pathname === '/public';

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '12px 24px',
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo/Brand */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            🐕
          </div>
          <span style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white'
          }}>
            Mascotas App
          </span>
        </div>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Link
            to="/"
            style={{
              background: isDashboard ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '10px 16px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: isDashboard ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              if (!isDashboard) {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isDashboard) {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            📊 Registro
          </Link>
          
          <Link
            to="/public"
            style={{
              background: isPublicDashboard ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '10px 16px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: isPublicDashboard ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              if (!isPublicDashboard) {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isPublicDashboard) {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            📈 Dashboard
          </Link>
        </nav>

        {/* User Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 12px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '12px'
            }}>
              {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
            </div>
            <span style={{
              fontSize: '13px',
              fontWeight: '500',
              color: 'white'
            }}>
              {user.name || user.email}
            </span>
          </div>
          
          <button
            onClick={logout}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            🚪 Salir
          </button>
        </div>
      </div>
    </header>
  );
}