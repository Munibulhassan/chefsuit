import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Order from "./pages/order";
import Signup from "./pages/signup";
import Financial from "./pages/financial";
import Landscape from "./pages/landscape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />}  />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/order" element={<Order />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/landscape" element={<Landscape />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
