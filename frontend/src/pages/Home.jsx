import { useEffect, useState } from "react";
import FilmeCard from "../components/FilmeCard";
import Hero from "../components/Hero";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/filmes")
      .then(r => r.json())
      .then(setFilmes);
  }, []);

  return (
    <>
      <Hero />

      <div className="container" id="catalogo">
        <h1>Catálogo</h1>

        <div className="filmes">
          {filmes.map(f => (
            <FilmeCard key={f._id} filme={f} />
          ))}
        </div>
      </div>
    </>
  );
}