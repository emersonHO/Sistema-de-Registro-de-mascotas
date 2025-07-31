import PerroForm from "../components/PerroForm";
import PerroList from "../components/PerroList";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        {/* Header Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px 32px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '200px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '150px',
            height: '150px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            zIndex: 1
          }} />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{ 
              margin: 0, 
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              🐕 Gestión de Perros
            </h1>
            <p style={{ 
              margin: '12px 0 0 0', 
              opacity: 0.9,
              fontSize: '1.1rem'
            }}>
              Administra el registro de perros de manera fácil y eficiente
            </p>
            
            {/* Quick Navigation */}
            <div style={{
              marginTop: '24px',
              display: 'flex',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <Link
                to="/public"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                📊 Ver Dashboard Público
              </Link>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div style={{ 
          padding: '40px 32px',
          background: 'white'
        }}>
          <Breadcrumbs />
          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '24px',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📝</div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>Registro</h3>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
                Agregar nuevos perros
              </p>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              padding: '24px',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(240, 147, 251, 0.3)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📋</div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>Lista</h3>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
                Ver todos los perros
              </p>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              padding: '24px',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(79, 172, 254, 0.3)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📈</div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>Estadísticas</h3>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
                Dashboard público
              </p>
            </div>
          </div>
          
          {/* Form and List */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'start'
          }}>
            <div style={{
              background: '#f8f9fa',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                margin: '0 0 20px 0',
                color: '#333',
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                ➕ Agregar Perro
              </h3>
              <PerroForm onAdd={() => {}} />
            </div>
            
            <div style={{
              background: '#f8f9fa',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                margin: '0 0 20px 0',
                color: '#333',
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                📋 Lista de Perros
              </h3>
              <PerroList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

