const mongoose = require("mongoose");

module.exports = mongoose.model("Filme", {
  titulo: String,
  descricao: String,
  ano: String,
  imagem: String
});