import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import Poke from "./pages/Poke";
import PokeDetail from "./components/Poke/PokeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokemon">
          <Route index element={<Poke />} />
          <Route path=":id" element={<PokeDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
