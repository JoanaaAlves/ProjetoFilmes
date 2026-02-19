import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 20 }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;