import { Link } from "react-router-dom";

export default function FilmeCard({ filme }) {
  return (
    <div className="card">
      <img src={filme.imagem} />

      <div className="card-body">
        <h4>{filme.titulo}</h4>
        <p>{filme.ano}</p>

        <Link to={`/filme/${filme._id}`}>
          <button>Ver detalhes</button>
        </Link>
      </div>
    </div>
  );
}