import Hero from "../components/Hero";
import FilmeCard from "../components/FilmeCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/filmes")
      .then(res => res.json())
      .then(data => setFilmes(data));
  }, []);

  return (
    <>
      <Hero />

      <h2 style={{ padding: "30px" }}>Catálogo de Filmes</h2>

      <div className="catalogo">
        {filmes.map(f => (
          <FilmeCard key={f._id} filme={f} />
        ))}
      </div>
    </>
  );
}