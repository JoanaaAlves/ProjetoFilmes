import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilmeCard from "../components/FilmeCard";
import "./Home.css";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  const imagens = [
    "/imagens/raya.jpg",
    "/imagens/rio.jpg",
    "/imagens/luca.jpg",
    "/imagens/soul.jpg"
  ];

  // slider automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  // buscar filmes da API
  useEffect(() => {
    fetch("http://localhost:3000/filmes")
      .then(res => res.json())
      .then(data => setFilmes(data));
  }, []);

  return (
    <>
      {/* HERO / SLIDER */}
      <div className="hero">
        <img
          src={imagens[index]}
          className="hero-image"
          alt="slide"
        />

        <div className="overlay">
          <h1>Bem-vindo ao Cinema</h1>
          <p>Descobre os teus filmes favoritos</p>

          <button onClick={() => navigate("/")}>
            Ver catálogo
          </button>
        </div>
      </div>

      {/* CATÁLOGO */}
      <div className="catalogo">
        <h2>Catálogo de Filmes</h2>

        <div className="grid">
          {filmes.map(filme => (
            <FilmeCard key={filme._id} filme={filme} />
          ))}
        </div>
      </div>
    </>
  );
}