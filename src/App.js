import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import Poke from "./pages/Poke";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokemon" element={<Poke />} />
      </Route>
    </Routes>
  );
}

export default App;
