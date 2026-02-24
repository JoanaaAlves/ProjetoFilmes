import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Admin() {
  const [filmes, setFilmes] = useState([]);
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    ano: "",
    imagem: "",
  });

  const [editId, setEditId] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchFilmes();
  }, []);

  function fetchFilmes() {
    fetch("http://localhost:3000/filmes")
      .then(r => r.json())
      .then(d => setFilmes(d));
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "imagem") setPreview(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    setLoading(true);

    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:3000/filmes/${editId}`
      : "http://localhost:3000/filmes";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      setForm({ titulo: "", descricao: "", ano: "", imagem: "" });
      setPreview("");
      setEditId(null);
      setLoading(false);
      fetchFilmes();
    });
  }

  function editar(f) {
    setForm(f);
    setPreview(f.imagem);
    setEditId(f._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function apagar(id) {
    if (!window.confirm("Tens a certeza que queres apagar este filme?")) return;

    fetch(`http://localhost:3000/filmes/${id}`, { method: "DELETE" }).then(fetchFilmes);
  }

  function logout() {
    localStorage.removeItem("logged");
    navigate("/");
  }

  return (
    <div className="admin-page">

      <div className="admin-top">
        <Link to="/" className="admin-home">Home</Link>
        <button onClick={logout} className="admin-logout">Logout</button>
      </div>

      {/* FORM */}

      <div className="admin-form">
        <h2>{editId ? "Editar Filme" : "Adicionar Filme"}</h2>

        <form onSubmit={submit}>
          <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange}/>
          <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange}/>
          <input name="ano" placeholder="Ano" value={form.ano} onChange={handleChange}/>
          <input name="imagem" placeholder="/imagens/avatar.jpg" value={form.imagem} onChange={handleChange}/>

          {preview && <img src={preview} className="preview-img" />}

          <button>
            {loading ? "A guardar..." : editId ? "Guardar alterações" : "Adicionar filme"}
          </button>
        </form>
      </div>

      {/* LISTA */}

      <div className="admin-grid">
        {filmes.map(f => (
          <div className="admin-movie" key={f._id}>
            <img src={f.imagem} />

            <div>
              <h4>{f.titulo}</h4>
              <small>{f.ano}</small>

              <div className="admin-actions">
                <button className="edit" onClick={() => editar(f)}>Editar</button>
                <button className="delete" onClick={() => apagar(f._id)}>Apagar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}