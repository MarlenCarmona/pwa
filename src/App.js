import { Layout, Inicio, Mas, Favorito } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  // Botón de descarga en Layout
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="galeria" element={<Favorito />} />
        <Route path="acerca" element={<Mas />} />
      </Routes>
    </Layout>
  );
}

export default App;