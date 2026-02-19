import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const login = () => {
    if (user === "admin" && pass === "1234") {
      localStorage.setItem("logado", "true");
      nav("/admin");
    } else alert("Login errado");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <input placeholder="user" onChange={e=>setUser(e.target.value)} /><br/>
      <input type="password" placeholder="pass" onChange={e=>setPass(e.target.value)} /><br/>
      <button onClick={login}>Entrar</button>
    </div>
  );
}

export default Login;