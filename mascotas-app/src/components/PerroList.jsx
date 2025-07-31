import { useEffect, useState } from "react";
import { getPerros, deletePerro } from "../services/PerroService";
import { updatePerro } from "../services/PerroService";

export default function PerroList() {
  const [perros, setPerros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ nombre: "", raza: "", tamano: "", ubicacion: "", comportamiento: "", duenio: "", edad: "" });

  const cargar = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getPerros();
      setPerros(res.data);
    } catch (err) {
      setError("Error al cargar los perros");
    } finally {
      setLoading(false);
    }
  };

  const eliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este perro?")) return;
    setLoading(true);
    try {
      await deletePerro(id);
      await cargar();
    } catch (err) {
      setError("Error al eliminar el  perro");
    } finally {
      setLoading(false);
    }
  };

  const iniciarEdicion = (h) => {
    setEditId(h.id);
    setEditData({ nombre: h.nombre, raza: h.raza, tamano: h.tamano, ubicacion: h.ubicacion, comportamiento: h.comportamiento, duenio: h.duenio, edad: h.edad });
  };

  const cancelarEdicion = () => {
    setEditId(null);
    setEditData({ nombre: "", raza: "", tamano: "", ubicacion: "", comportamiento: "", duenio: "", edad: "" });
  };

  const guardarEdicion = async (id) => {
    setLoading(true);
    setError("");
    try {
      await updatePerro(id, editData);
      setEditId(null);
      await cargar();
    } catch (err) {
      setError("Error al editar al perro");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  if (loading) return (
    <div style={{ 
      textAlign: "center", 
      padding: "40px",
      color: '#666',
      fontSize: '16px'
    }}>
      Cargando perros...
    </div>
  );
  
  if (error) return (
    <div style={{ 
      color: "#d32f2f", 
      textAlign: "center", 
      padding: "20px",
      background: '#ffebee',
      borderRadius: '8px',
      border: '1px solid #ffcdd2'
    }}>
      {error}
    </div>
  );

  return (
    <div>
      <h3 style={{ 
        margin: '0 0 20px 0', 
        color: '#333',
        fontSize: '18px',
        fontWeight: '600'
      }}>
        Perros Registradas ({perros.length})
      </h3>
      
      {perros.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          color: "#666",
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🐕</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>No hay perros registradas</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Inicia agregando el primer perro
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '16px' }}>
          {perros.map((h) => (
            <div key={h.id} style={{
              background: "white",
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f0f0f0'
            }}>
              {editId === h.id ? (
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <input 
                      value={editData.nombre} 
                      onChange={e => setEditData({ ...editData, nombre: e.target.value })} 
                      placeholder="Nombre"
                      style={{ 
                        padding: '12px 16px', 
                        borderRadius: '8px', 
                        border: "1px solid #e1e5e9",
                        fontSize: '14px'
                      }}
                    />
                    <input 
                      value={editData.raza} 
                      onChange={e => setEditData({ ...editData, raza: e.target.value })} 
                      placeholder="Raza"
                      style={{ 
                        padding: '12px 16px', 
                        borderRadius: '8px', 
                        border: "1px solid #e1e5e9",
                        fontSize: '14px'
                      }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <input 
                      value={editData.tamano} 
                      onChange={e => setEditData({ ...editData, tamano: e.target.value })} 
                      placeholder="Tamaño"
                      style={{ 
                        padding: '12px 16px', 
                        borderRadius: '8px', 
                        border: "1px solid #e1e5e9",
                        fontSize: '14px'
                      }}
                    />
                    <input 
                      value={editData.ubicacion} 
                      onChange={e => setEditData({ ...editData, ubicacion: e.target.value })} 
                      placeholder="Ubicación"
                      style={{ 
                        padding: '12px 16px', 
                        borderRadius: '8px', 
                        border: "1px solid #e1e5e9",
                        fontSize: '14px'
                      }}
                    />
                    <input 
                      value={editData.comportamiento} 
                      onChange={e => setEditData({ ...editData, comportamiento: e.target.value })} 
                      placeholder="Comportamiento"
                      style={{ 
                        padding: '12px 16px', 
                        borderRadius: '8px', 
                        border: "1px solid #e1e5e9",
                        fontSize: '14px'
                      }}
                    />
                    <input 
                      value={editData.duenio} 
                      onChange={e => setEditData({ ...editData, duenio: e.target.value })} 
                      placeholder="Dueño"
                      style={{ 
                        padding: '12px 16px', 
                        borderRadius: '8px', 
                        border: "1px solid #e1e5e9",
                        fontSize: '14px'
                      }}
                    />
                    <input 
                      value={editData.edad} 
                      onChange={e => setEditData({ ...editData, edad: e.target.value })} 
                      placeholder="Edad"
                      style={{ 
                        padding: '12px 16px', 
                        borderRadius: '8px', 
                        border: "1px solid #e1e5e9",
                        fontSize: '14px'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button 
                      onClick={cancelarEdicion} 
                      style={{ 
                        background: "#6c757d", 
                        color: "white", 
                        border: "none", 
                        borderRadius: '8px', 
                        padding: "10px 20px", 
                        cursor: "pointer",
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      Cancelar
                    </button>
                    <button 
                      onClick={() => guardarEdicion(h.id)} 
                      style={{ 
                        background: "#667eea", 
                        color: "white", 
                        border: "none", 
                        borderRadius: '8px', 
                        padding: "10px 20px", 
                        cursor: "pointer",
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      margin: '0 0 12px 0', 
                      color: '#333',
                      fontSize: '18px',
                      fontWeight: '600'
                    }}>
                      {h.nombre}
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                      <div>
                        <strong style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase' }}>Raza:</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>{h.raza}</p>
                      </div>
                      <div>
                        <strong style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase' }}>Tamaño:</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>{h.tamano}</p>
                      </div>
                      <div>
                        <strong style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase' }}>Ubicación:</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>{h.ubicacion}</p>
                      </div>
                      <div>
                        <strong style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase' }}>Comportamiento:</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>{h.comportamiento}</p>
                      </div>
                      <div>
                        <strong style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase' }}>Dueño:</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>{h.duenio}</p>
                      </div>
                      <div>
                        <strong style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase' }}>Edad:</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>{h.edad}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
                    <button 
                      onClick={() => iniciarEdicion(h)} 
                      style={{ 
                        background: "#ffa726", 
                        color: "white", 
                        border: "none", 
                        borderRadius: '6px', 
                        padding: "8px 16px", 
                        cursor: "pointer",
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => eliminar(h.id)} 
                      style={{ 
                        background: "#d32f2f", 
                        color: "white", 
                        border: "none", 
                        borderRadius: '6px', 
                        padding: "8px 16px", 
                        cursor: "pointer",
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}