import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
