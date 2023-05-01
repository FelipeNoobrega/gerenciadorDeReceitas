import { useState } from 'react';
import ReactModal from 'react-modal';
import "./Style.css";

export default function CardReceita({ nome, ingredientes, modoPreparo, onExcluir, onEditar }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [novaReceita, setNovaReceita] = useState({
    nome: nome,
    ingredientes: ingredientes,
    modoPreparo: modoPreparo
  });

  const handeleOnChangeReceita = (event, key) => {
    setNovaReceita({...novaReceita, [key] : event.target.value })
  }

  const handleEditarReceita = (event) => {
    event.preventDefault();
    onEditar(novaReceita);
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h3>{nome}</h3>
      <h4>Ingredientes</h4>
      <ul>
        {ingredientes.split(",").map((ingrediente, index) => (
          <li key={index}>{ingrediente.trim()}</li>
        ))}
      </ul>
      <h4>Modo de Preparo</h4>
      <p>{modoPreparo}</p>
      <div className="card-buttons">
        <button onClick={onExcluir}>Excluir</button>
        <button onClick={() => setModalIsOpen(true)}>Editar</button>
      </div>
      <ReactModal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Editar Receita Modal"
      >
        <form className="form" onSubmit={handleEditarReceita}>
          <input 
            type="text"
            placeholder="Nome da receita"
            required
            value={novaReceita.nome}
            onChange={(event) => handeleOnChangeReceita(event, 'nome')}
          />
          <input 
            type="text"
            placeholder="ingreditentes"
            required
            value={novaReceita.ingredientes}
            onChange={(event) => handeleOnChangeReceita(event, 'ingredientes')}
          />
          <input 
            type="text"
            placeholder="modo de preparo"
            required
            value={novaReceita.modoPreparo}
            onChange={(event) => handeleOnChangeReceita(event, 'modoPreparo')}
          />
          <button type='submit'>Salvar</button>
          <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
        </form>
      </ReactModal>
    </div>
  );
}