import { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function PublicDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/dashboard/estadisticas');
      setStats(response.data);
    } catch (err) {
      setError('Error al cargar las estadísticas');
      console.error('Error loading stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const searchPerros = async () => {
    if (!searchTerm.trim()) return;
    
    try {
      setSearching(true);
      const response = await axios.get(`/api/dashboard/perros-duenio?duenio=${encodeURIComponent(searchTerm)}`);
      setSearchResults(response.data);
    } catch (err) {
      setSearchResults([]);
      console.error('Error searching perros:', err);
    } finally {
      setSearching(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchPerros();
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Cargando estadísticas...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#c62828'
      }}>
        {error}
      </div>
    );
  }

  const razaChartData = {
    labels: stats?.perrosPorRaza?.map(d => d.raza) || [],
    datasets: [{
      data: stats?.perrosPorRaza?.map(d => d.cantidad) || [],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'
      ],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  };

  const edadChartData = {
    labels: stats?.perrosPorEdad?.map(d => d.categoria) || [],
    datasets: [{
      label: 'Cantidad de Perros',
      data: stats?.perrosPorEdad?.map(d => d.cantidad) || [],
      backgroundColor: 'rgba(102, 126, 234, 0.8)',
      borderColor: 'rgba(102, 126, 234, 1)',
      borderWidth: 2,
      borderRadius: 5
    }]
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            🐕 Dashboard de Perros Registrados
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            Estadísticas generales del registro canino municipal
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {/* Total Perros */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white'
          }}>
            <h2 style={{
              fontSize: '3rem',
              marginBottom: '10px'
            }}>
              {stats?.totalPerros || 0}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              opacity: 0.9
            }}>
              Total de Perros Registrados
            </p>
          </div>

          {/* Gráfico Razas */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              color: '#667eea',
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              Perros por Raza
            </h3>
            <div style={{ height: '300px', position: 'relative' }}>
              {stats?.perrosPorRaza?.length > 0 ? (
                <Pie 
                  data={razaChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          padding: 20,
                          usePointStyle: true
                        }
                      },
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            const data = stats.perrosPorRaza[context.dataIndex];
                            return `${data.raza}: ${data.cantidad} (${data.porcentaje.toFixed(1)}%)`;
                          }
                        }
                      }
                    }
                  }}
                />
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '20px',
                  color: '#666'
                }}>
                  No hay datos de razas disponibles
                </div>
              )}
            </div>
          </div>

          {/* Gráfico Edades */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              color: '#667eea',
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              Perros por Edad
            </h3>
            <div style={{ height: '300px', position: 'relative' }}>
              {stats?.perrosPorEdad?.length > 0 ? (
                <Bar 
                  data={edadChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: {
                          stepSize: 1
                        }
                      }
                    }
                  }}
                />
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '20px',
                  color: '#666'
                }}>
                  No hay datos de edad disponibles
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          marginBottom: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            color: '#667eea',
            marginBottom: '15px'
          }}>
            🔍 Buscar Perros por Dueño
          </h3>
          
          <form onSubmit={handleSearch} style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px'
          }}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ingrese el nombre del dueño..."
              style={{
                flex: 1,
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            <button
              type="submit"
              disabled={searching}
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'transform 0.3s ease',
                opacity: searching ? 0.7 : 1
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {searching ? 'Buscando...' : 'Buscar'}
            </button>
          </form>

          {searchResults.length > 0 && (
            <div>
              <h4 style={{
                marginBottom: '15px',
                color: '#667eea'
              }}>
                Perros de {searchTerm} ({searchResults.length} encontrados)
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '15px'
              }}>
                {searchResults.map((perro, index) => (
                  <div key={index} style={{
                    background: '#f8f9fa',
                    borderRadius: '10px',
                    padding: '15px',
                    borderLeft: '4px solid #667eea'
                  }}>
                    <h4 style={{
                      color: '#667eea',
                      marginBottom: '8px'
                    }}>
                      {perro.nombre || 'Sin nombre'}
                    </h4>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      <p><strong>Raza:</strong> {perro.raza || 'No especificada'}</p>
                      <p><strong>Tamaño:</strong> {perro.tamano || 'No especificado'}</p>
                      <p><strong>Edad:</strong> {perro.edad ? perro.edad + ' años' : 'No especificada'}</p>
                      <p><strong>Comportamiento:</strong> {perro.comportamiento || 'No especificado'}</p>
                      <p><strong>Ubicación:</strong> {perro.ubicacion || 'No especificada'}</p>
                      <p><strong>Dueño:</strong> {perro.duenio || 'No especificado'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchResults.length === 0 && searchTerm && !searching && (
            <div style={{
              background: '#ffebee',
              color: '#c62828',
              padding: '15px',
              borderRadius: '8px',
              marginTop: '10px'
            }}>
              No se encontraron perros para este dueño
            </div>
          )}
        </div>

        {/* Mapa Section */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            color: '#667eea',
            marginBottom: '15px'
          }}>
            🗺️ Densidad Canina por Ubicación
          </h3>
          <div style={{
            height: '400px',
            borderRadius: '15px',
            overflow: 'hidden',
            background: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3>🗺️ Mapa de Densidad Canina</h3>
              <p>Para ver el mapa interactivo, configura la API key de Google Maps</p>
              <div style={{ marginTop: '20px' }}>
                <strong>Ubicaciones con perros registrados:</strong><br />
                <div style={{ marginTop: '10px' }}>
                  {stats?.perrosPorUbicacion?.map((ubicacion, index) => (
                    <span key={index} style={{
                      display: 'inline-block',
                      margin: '2px 5px',
                      padding: '4px 8px',
                      background: '#667eea',
                      color: 'white',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {ubicacion.ubicacion}: {ubicacion.cantidad} perros
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}