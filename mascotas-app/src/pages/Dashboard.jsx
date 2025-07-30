import PerroForm from "../components/PerroForm";
import PerroList from "../components/PerroList";

export default function Dashboard() {
  return (
    <div>
      <h2>Panel de Perros</h2>
      <PerroForm onAdd={() => {}} />
      <PerroList />
    </div>
  );
}
