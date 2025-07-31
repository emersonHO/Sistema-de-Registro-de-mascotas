import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-20%',
        width: '400px',
        height: '400px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-30%',
        width: '500px',
        height: '500px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%',
        zIndex: 1
      }} />
      
      <div style={{
        textAlign: 'center',
        color: 'white',
        maxWidth: '800px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          fontSize: '80px',
          marginBottom: '24px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          🐕
        </div>
        
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '16px',
          fontWeight: '700',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Mascotas App
        </h1>
        
        <p style={{
          fontSize: '1.4rem',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: 1.6,
          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
        }}>
          Gestiona el registro de perros de manera fácil, organizada y segura
        </p>
        
        {/* Quick Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <Link
            to="/public"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            📊 Ver Dashboard Público
          </Link>
          
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => window.location.reload()}
          >
            🔐 Iniciar Sesión
          </div>
        </div>
        
        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginTop: '40px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '28px',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.background = 'rgba(255,255,255,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.background = 'rgba(255,255,255,0.1)';
          }}
          >
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>📝</div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>Registro Fácil</h3>
            <p style={{ margin: 0, fontSize: '15px', opacity: 0.9, lineHeight: 1.5 }}>
              Agrega mascotas con toda su información de manera rápida y sencilla
            </p>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '28px',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.background = 'rgba(255,255,255,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.background = 'rgba(255,255,255,0.1)';
          }}
          >
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>Búsqueda Rápida</h3>
            <p style={{ margin: 0, fontSize: '15px', opacity: 0.9, lineHeight: 1.5 }}>
              Encuentra perros por nombre, raza, dueño o ubicación de forma instantánea
            </p>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '28px',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.background = 'rgba(255,255,255,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.background = 'rgba(255,255,255,0.1)';
          }}
          >
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>📊</div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>Estadísticas</h3>
            <p style={{ margin: 0, fontSize: '15px', opacity: 0.9, lineHeight: 1.5 }}>
              Visualiza gráficos y estadísticas detalladas del registro canino
            </p>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '28px',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.background = 'rgba(255,255,255,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.background = 'rgba(255,255,255,0.1)';
          }}
          >
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>💾</div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>Almacenamiento Seguro</h3>
            <p style={{ margin: 0, fontSize: '15px', opacity: 0.9, lineHeight: 1.5 }}>
              Los datos están protegidos y sincronizados en tiempo real
            </p>
          </div>
        </div>
        
        {/* Login reminder */}
        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <p style={{
            margin: '0 0 8px 0',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            🔐 Inicia sesión para acceder al registro completo
          </p>
          <p style={{
            margin: 0,
            fontSize: '14px',
            opacity: 0.8
          }}>
            El modal de autenticación aparecerá automáticamente
          </p>
        </div>
      </div>
    </div>
  );
}