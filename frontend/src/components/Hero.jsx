import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const banners = [
  "/imagens/banner1.jpg",
  "/imagens/banner2.jpg",
  "/imagens/banner3.jpg",
  "/imagens/banner4.jpg"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${banners[index]})` }}
    >
      <div className="hero-overlay">
        <h1>Bem-vindo ao Cinema</h1>
        <p>Descobre os teus filmes favoritos</p>

        <div className="hero-buttons">
          <Link to="/" className="btn-main">
            Ver catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}