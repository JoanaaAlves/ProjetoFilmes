import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/filmes")
      .then(res => setFilmes(res.data));
  }, []);

  const filmesFiltrados = filmes.filter(f =>
    f.titulo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Catálogo de Filmes</h1>

      <input
        placeholder="Pesquisar..."
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
      />

      {filmesFiltrados.map(f => (
        <div key={f.id}>
          <h3>{f.titulo}</h3>
          <img src={f.imagem} width="150" />
          <p>{f.descricao}</p>
          <small>{f.ano}</small>
        </div>
      ))}
    </div>
  );
}

export default Home;