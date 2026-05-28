import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Lgpd from "./pages/Lgpd";
import Layout from "./pages/Layout";

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
        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
