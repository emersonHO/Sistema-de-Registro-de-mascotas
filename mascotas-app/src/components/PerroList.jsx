import { useEffect, useState } from "react";
import { getPerros, deletePerro } from "../services/PerroService";

export default function PerroList() {
  const [perros, setPerros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cargar = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getPerros();
      setPerros(res.data);
    } catch (err) {
      setError("Error al cargar las perros");
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
      setError("Error al eliminar el perro");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  useEffect(() => {
    cargar();
  }, []);

  if (loading) return <div style={{ textAlign: "center", margin: 20 }}>Cargando...</div>;
  if (error) return <div style={{ color: "#d32f2f", textAlign: "center", margin: 20 }}>{error}</div>;

  return (
    <ul style={{ maxWidth: 600, margin: "24px auto", padding: 0, listStyle: "none" }}>
      {perros.map((h) => (
        <li key={h.id} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 6, marginBottom: 10, padding: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span>
            <b>{h.nombre}</b> &mdash; {h.raza} &mdash; {h.tamano} &mdash; {h.ubicacion} &mdash; {h.comportamiento} &mdash; {h.duenio}
          </span>
          <button onClick={() => eliminar(h.id)} style={{ background: "#d32f2f", color: "white", border: "none", borderRadius: 4, padding: "6px 12px", cursor: "pointer" }}>Eliminar</button>
        </li>
      ))}
      {perros.length === 0 && <li style={{ textAlign: "center", color: "#888" }}>No hay perros registradas.</li>}
    </ul>
  );
}
