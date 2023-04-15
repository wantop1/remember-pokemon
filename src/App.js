import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import HomePage from './pages/HomePage';
import PokemonPage from "./pages/PokemonPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon">
          <Route index element={<PokemonPage />} />
          <Route path=":id" element={<PokemonDetailPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
