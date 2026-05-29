import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Lgpd from "./pages/Lgpd";
import Layout from "./pages/Layout";
import MenuSection from "./components/sections/menu/MenuSection";
import CartSection from "@/components/sections/cart/CartSection";
import CheckoutSection from "./components/sections/cart/CheckoutSection";
import OrderSection from "./components/sections/order/OrderSection";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lgpd" element={<Lgpd />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/cart" element={<CartSection />} />
          <Route path="/checkout" element={<CheckoutSection />} />
          <Route path="/order" element={<OrderSection />} />
        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
