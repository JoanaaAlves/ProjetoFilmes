const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let filmes = [
  {
    id: 1,
    titulo: "Matrix",
    descricao: "Filme de ficção científica",
    ano: 1999,
    imagem: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
  }
];

// GET todos os filmes
app.get("/filmes", (req, res) => {
  res.json(filmes);
});

// POST criar filme
app.post("/filmes", (req, res) => {
  const novoFilme = {
    id: Date.now(),
    ...req.body
  };

  filmes.push(novoFilme);
  res.json(novoFilme);
});

// PUT editar filme
app.put("/filmes/:id", (req, res) => {
  const id = req.params.id;

  filmes = filmes.map(f =>
    f.id == id ? { ...f, ...req.body } : f
  );

  res.json({ message: "Filme atualizado" });
});

// DELETE apagar filme
app.delete("/filmes/:id", (req, res) => {
  const id = req.params.id;
  filmes = filmes.filter(f => f.id != id);

  res.json({ message: "Filme apagado" });
});

app.listen(3000, () => {
  console.log("API a correr em http://localhost:3000");
});