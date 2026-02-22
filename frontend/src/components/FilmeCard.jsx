import { Link } from "react-router-dom";

export default function FilmeCard({ filme }) {
  return (
    <div className="filme-card">
      <img src={filme.imagem} />

      <h3>{filme.titulo}</h3>
      <p>{filme.ano}</p>

      <Link to={`/filme/${filme._id}`}>
        <button>Ver detalhes</button>
      </Link>
    </div>
  );
}