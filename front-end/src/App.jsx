import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importando Routes e Route
import Home from "./pages/Home";
import AcomodacaoDetalhes from "./components/AcomodacaoDetalhes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acomodacao/:id" element={<AcomodacaoDetalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
