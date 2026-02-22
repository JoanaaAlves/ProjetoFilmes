export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Bem-vindo ao Cinema</h1>
        <p>Descobre os teus filmes favoritos</p>

        <a href="#catalogo">
          <button className="hero-btn">Ver catálogo</button>
        </a>
      </div>
    </div>
  );
}