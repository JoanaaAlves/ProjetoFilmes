const mongoose = require("mongoose");

const FilmeSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  ano: Number,
  imagem: String
});

module.exports = mongoose.model("Filme", FilmeSchema);