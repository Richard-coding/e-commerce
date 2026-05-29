import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Lgpd from "./pages/Lgpd";
import Layout from "./pages/Layout";
import MenuSection from "./components/sections/menu/MenuSection";
import CartSection from "@/components/sections/cart/CartSection";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lgpd" element={<Lgpd />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cardapio" element={<MenuSection />} />
          <Route path="/carrinho" element={<CartSection />} />

        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
