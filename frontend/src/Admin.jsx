import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
    const nav = useNavigate();

    if (!localStorage.getItem("logado")) {
        nav("/login");
    }
  const [filmes, setFilmes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ano, setAno] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => carregar(), []);

  const carregar = () => {
    axios.get("http://localhost:3000/filmes")
      .then(res => setFilmes(res.data));
  };

  const adicionar = () => {
    axios.post("http://localhost:3000/filmes", {
      titulo, descricao, ano, imagem
    }).then(() => {
      setTitulo(""); setDescricao(""); setAno(""); setImagem("");
      carregar();
    });
  };

  const apagar = id => {
    axios.delete(`http://localhost:3000/filmes/${id}`)
      .then(() => carregar());
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Backoffice</h1>

      <input placeholder="Título" value={titulo} onChange={e=>setTitulo(e.target.value)} /><br/>
      <input placeholder="Descrição" value={descricao} onChange={e=>setDescricao(e.target.value)} /><br/>
      <input placeholder="Ano" value={ano} onChange={e=>setAno(e.target.value)} /><br/>
      <input placeholder="Imagem URL" value={imagem} onChange={e=>setImagem(e.target.value)} /><br/>

      <button onClick={adicionar}>Adicionar</button>

      <hr/>

      {filmes.map(f => (
        <div key={f.id}>
          {f.titulo}
          <button onClick={() => apagar(f.id)}>Apagar</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;