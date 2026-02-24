import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();

    if (email === "admin@admin.pt" && password === "1234") {
      localStorage.setItem("logged", "true");
      navigate("/admin");
    } else {
      alert("Password errada");
    }
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={login}>
        
        <h2>Área de Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Entrar</button>

      </form>
    </div>
  );
}