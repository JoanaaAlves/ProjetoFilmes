import { useEffect, useState } from "react";

export default function Admin() {
  const [filmes, setFilmes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ano, setAno] = useState("");
  const [imagem, setImagem] = useState("");

  const carregar = () => {
    fetch("http://localhost:3000/filmes")
      .then(r => r.json())
      .then(setFilmes);
  };

  useEffect(carregar, []);

  const adicionar = async e => {
    e.preventDefault();

    await fetch("http://localhost:3000/filmes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, descricao, ano, imagem })
    });

    setTitulo("");
    setDescricao("");
    setAno("");
    setImagem("");

    carregar();
  };

  const apagar = async id => {
    await fetch(`http://localhost:3000/filmes/${id}`, { method: "DELETE" });
    carregar();
  };

  return (
    <div className="container">
      <h1>Backoffice</h1>

      <form onSubmit={adicionar}>
        <input placeholder="Título" value={titulo} onChange={e=>setTitulo(e.target.value)} />
        <input placeholder="Descrição" value={descricao} onChange={e=>setDescricao(e.target.value)} />
        <input placeholder="Ano" value={ano} onChange={e=>setAno(e.target.value)} />
        <input placeholder="Imagem (/imagens/avatar.jpg)" value={imagem} onChange={e=>setImagem(e.target.value)} />
        <button>Adicionar Filme</button>
      </form>

      <div className="admin-filmes">
        {filmes.map(f => (
          <div key={f._id} className="admin-card">
            <img src={f.imagem} />
            <h3>{f.titulo}</h3>
            <p>{f.ano}</p>
            <button className="apagar" onClick={()=>apagar(f._id)}>Apagar</button>
          </div>
        ))}
      </div>
    </div>
  );
}