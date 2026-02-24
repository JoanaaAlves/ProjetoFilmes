const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Filme = require("./models/Filme");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// LIGA AO MONGO
mongoose.connect("mongodb://127.0.0.1:27017/projetofilmes")
.then(() => console.log("MongoDB ligado"))
.catch(err => console.log(err));


// ================= FILMES =================

// GET todos os filmes
app.get("/filmes", async (req, res) => {
  const filmes = await Filme.find();
  res.json(filmes);
});

// POST criar filme
app.post("/filmes", async (req, res) => {
  const filme = new Filme(req.body);
  await filme.save();
  res.json(filme);
});

// DELETE filme
app.delete("/filmes/:id", async (req, res) => {
  await Filme.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});


// ================= LOGIN =================

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (!user) {
    return res.status(401).json({ erro: "Login inválido" });
  }

  res.json(user);
});


// ================= SERVER =================

app.listen(3000, () => {
  console.log("API a correr em http://localhost:3000");
});

// PUT - editar filme
app.put("/filmes/:id", async (req, res) => {
  const filme = await Filme.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(filme);
});