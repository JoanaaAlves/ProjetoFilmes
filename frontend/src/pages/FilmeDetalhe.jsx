import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FilmeDetalhe() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/filmes")
      .then(r => r.json())
      .then(data => {
        setFilme(data.find(f => f._id === id));
      });
  }, []);

  if (!filme) return "A carregar...";

  return (
    <div style={{ padding: 40 }}>
      <img src={filme.imagem} width="300" />
      <h1>{filme.titulo}</h1>
      <p>{filme.descricao}</p>
      <p>{filme.ano}</p>
    </div>
  );
}