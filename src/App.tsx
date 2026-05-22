import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/home" element={<Home />}></Route>

        <Route path="/*" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
