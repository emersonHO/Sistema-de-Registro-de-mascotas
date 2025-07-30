import { useState } from "react";
import { addPerro } from "../services/PerroService";

export default function PerroForm({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [tamano, setTamano] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [comportamiento, setComportamiento] = useState("");
  const [duenio, setDuenio] = useState("");

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
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10, padding: 20, border: "1px solid #ddd", borderRadius: 8, background: "#f9f9f9" }}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del perro" required style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
      <input value={raza} onChange={(e) => setRaza(e.target.value)} placeholder="Raza" required style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
      <input value={tamano} onChange={(e) => setTamano(e.target.value)} placeholder="Tamaño" required style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
      <input value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} placeholder="Ubicación" required style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
      <input value={comportamiento} onChange={(e) => setComportamiento(e.target.value)} placeholder="Comportamiento" required style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />  
      <input value={duenio} onChange={(e) => setDuenio(e.target.value)} placeholder="Dueño" required style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
      <button type="submit" disabled={loading} style={{ padding: 10, borderRadius: 4, background: "#1976d2", color: "white", border: "none", fontWeight: 600, cursor: loading ? "not-allowed" : "pointer" }}>
        {loading ? "Registrando..." : "Registrar"}
      </button>
      {error && <div style={{ color: "#d32f2f", marginTop: 8 }}>{error}</div>}
      {success && <div style={{ color: "#388e3c", marginTop: 8 }}>{success}</div>}
    </form>
  );
}
