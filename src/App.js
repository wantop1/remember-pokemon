import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import HomePage from './pages/HomePage';
import PokemonPage from "./pages/PokemonPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import About from "./pages/About";
import Etc from './pages/Etc';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon">
          <Route index element={<PokemonPage />} />
          <Route path=":id" element={<PokemonDetailPage />} />
        </Route>
        <Route path="about" element={<About />}/>
        <Route path="etc" element={<Etc/>}/>
      </Route>
    </Routes>
  );
}

export default App;
