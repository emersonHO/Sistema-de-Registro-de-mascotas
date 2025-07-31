import { useState } from "react";
import { addPerro } from "../services/PerroService";

export default function PerroForm({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [tamano, setTamano] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [comportamiento, setComportamiento] = useState("");
  const [duenio, setDuenio] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !raza || !tamano || !ubicacion || !comportamiento || !duenio) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setLoading(true);
    try {
      const nuevaPerro = { nombre, raza, tamano, ubicacion, comportamiento, duenio };
      const res = await addPerro(nuevaPerro);
      onAdd(res.data); // actualizar lista
      setNombre("");
      setRaza("");
      setTamano("");
      setUbicacion("");
      setComportamiento("");
      setDuenio("");
      setSuccess("Perro registrado exitosamente");
    } catch (err) {
      setError("Error al registrar el perro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '24px'
    }}>
      <h3 style={{ 
        margin: '0 0 20px 0', 
        color: '#333',
        fontSize: '18px',
        fontWeight: '600'
      }}>
        Agregar Nuevo Perro
      </h3>
      
      <form onSubmit={handleSubmit} style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "16px" 
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <input 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Nombre del perro" 
            required 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: "1px solid #e1e5e9",
              fontSize: '14px',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
          <input 
            value={raza} 
            onChange={(e) => setRaza(e.target.value)} 
            placeholder="Raza de perro" 
            required 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: "1px solid #e1e5e9",
              fontSize: '14px',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <input 
            value={tamano} 
            onChange={(e) => setTamano(e.target.value)} 
            placeholder="Tamaño del perro" 
            required 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: "1px solid #e1e5e9",
              fontSize: '14px',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
          <input 
            value={ubicacion} 
            onChange={(e) => setUbicacion(e.target.value)} 
            placeholder="Lugar donde pasea" 
            required 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: "1px solid #e1e5e9",
              fontSize: '14px',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
          <input 
            value={comportamiento} 
            onChange={(e) => setComportamiento(e.target.value)} 
            placeholder="Comportamiento del perro" 
            required 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: "1px solid #e1e5e9",
              fontSize: '14px',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
          <input 
            value={duenio} 
            onChange={(e) => setDuenio(e.target.value)} 
            placeholder="Nombre del dueño" 
            required 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: "1px solid #e1e5e9",
              fontSize: '14px',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading} 
          style={{ 
            padding: '14px 24px', 
            borderRadius: '8px', 
            background: "#667eea", 
            color: "white", 
            border: "none", 
            fontWeight: "600", 
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: '14px',
            transition: 'all 0.2s ease',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? "Registrando..." : "Agregar Perro"}
        </button>
        
        {error && (
          <div style={{ 
            color: "#d32f2f", 
            fontSize: '14px',
            padding: '12px',
            background: '#ffebee',
            borderRadius: '6px',
            border: '1px solid #ffcdd2'
          }}>
            {error}
          </div>
        )}
        
        {success && (
          <div style={{ 
            color: "#388e3c", 
            fontSize: '14px',
            padding: '12px',
            background: '#e8f5e8',
            borderRadius: '6px',
            border: '1px solid #c8e6c9'
          }}>
            {success}
          </div>
        )}
      </form>
    </div>
  );
}
