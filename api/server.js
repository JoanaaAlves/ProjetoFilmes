const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Filme = require("./models/Filme");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/projetofilmes")
.then(() => console.log("MongoDB ligado"))
.catch(err => console.log(err));

// GET
app.get("/filmes", async (req, res) => {
  const filmes = await Filme.find();
  res.json(filmes);
});

// POST
app.post("/filmes", async (req, res) => {
  const filme = new Filme(req.body);
  await filme.save();
  res.json(filme);
});

// DELETE
app.delete("/filmes/:id", async (req, res) => {
  await Filme.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log("API http://localhost:3000");
});