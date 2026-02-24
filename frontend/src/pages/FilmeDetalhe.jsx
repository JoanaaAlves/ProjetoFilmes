import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FilmeDetalhe({ filme }) {
  return (
    <div
      className="detalhe-cinema"
      style={{ backgroundImage: `url(${filme.imagem})` }}
    >
      <div className="detalhe-overlay">
        <h1>{filme.titulo}</h1>
        <p>{filme.descricao}</p>
        <span>{filme.ano}</span>
      </div>
    </div>
  );
}
