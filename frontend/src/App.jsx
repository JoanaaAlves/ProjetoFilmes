import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import FilmeDetalhe from "./pages/FilmeDetalhe";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import "./App.css";

/* NAVBAR */

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const logged = localStorage.getItem("logged");

  // esconder navbar no login
  if (location.pathname === "/login") return null;

  function logout() {
    localStorage.removeItem("logged");
    navigate("/");
  }

  return (
    <nav className="main-nav">
      <div className="logo">🎬 Cinema</div>

      <div className="links">
        <Link to="/">Home</Link>

        {!logged && <Link to="/login" className="login-btn">Login</Link>}

        {logged && (
          <>
            <Link to="/admin">Admin</Link>

            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

/* ROTA PRIVADA */

function PrivateRoute({ children }) {
  return localStorage.getItem("logged") ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<FilmeDetalhe />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}