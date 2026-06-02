import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Lgpd from "./components/sections/legal/Lgpd";
import Layout from "@/components/layout/Layout.tsx"
import MenuSection from "./components/sections/menu/MenuSection";
import CartSection from "@/components/sections/cart/CartSection";
import CheckoutSection from "./components/sections/cart/CheckoutSection";
import OrderSection from "./components/sections/order/OrderSection";
import Terms from "./components/sections/legal/Terms";
import ForgetPassword from "./pages/Forget";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassword />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/cart" element={<CartSection />} />
          <Route path="/checkout" element={<CheckoutSection />} />
          <Route path="/order" element={<OrderSection />} />
          <Route path="/lgpd" element={<Lgpd />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
