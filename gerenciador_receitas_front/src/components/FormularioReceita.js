/*import {useState} from 'react';
import "./Style.css"
export default function FormularioReceita(){
    const [receitaState, setReceitaState] = useState({
        nome:"",
        ingredientes:"",
        modoPreparo:""
    });

    const handeleOnChangeReceita = (event, key) => {
        setReceitaState({...receitaState,[key] : event.target.value })
    }

    const handleSingupFrorm = (event) => {
        event.preventDefault();
    }
    return(
        <div className="content">
            <form className="form" onSubmit={handleSingupFrorm}>
                <input 
                    type="text"
                    placeholder="Nome da receita"
                    required
                    value={receitaState.nome}
                    onChange={(event) => handeleOnChangeReceita(event, 'nome')}
                />
                <input 
                    type="text"
                    placeholder="ingreditentes"
                    required
                    value={receitaState.ingrediantes}
                    onChange={(event) => handeleOnChangeReceita(event, 'ingrediantes')}
                />
                <input 
                    type="text"
                    placeholder="modo de preparo"
                    required
                    value={receitaState.modoPreparo}
                    onChange={(event) => handeleOnChangeReceita(event, 'modoPreparo')}
                />
                <button type='submit'>entrar</button>

                
            </form>
        </div>
    )
}
import { useState } from 'react';
import ReactModal from 'react-modal';
import "./Style.css";

export default function FormularioReceita(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [receitaEstate, setReceitaEstate] = useState({
        nome:"",
        ingredientes:"",
        modoPreparo:""
    });

    const handeleOnChangeReceita = (event, key) => {
        setReceitaEstate({...receitaEstate,[key] : event.target.value })
    }

    const handleSingupFrorm = (event) => {
        event.preventDefault();
        setModalIsOpen(false);
    }

    return(
        <div className="content">
            <button onClick={() => setModalIsOpen(true)}>Adicionar Receita</button>
            <ReactModal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Adicionar Receita Modal"
            >
                <form className="form" onSubmit={handleSingupFrorm}>
                    <input 
                        type="text"
                        placeholder="Nome da receita"
                        required
                        value={receitaEstate.nome}
                        onChange={(event) => handeleOnChangeReceita(event, 'nome')}
                    />
                    <input 
                        type="text"
                        placeholder="ingreditentes"
                        required
                        value={receitaEstate.ingredientes}
                        onChange={(event) => handeleOnChangeReceita(event, 'ingredientes')}
                    />
                    <input 
                        type="text"
                        placeholder="modo de preparo"
                        required
                        value={receitaEstate.modoPreparo}
                        onChange={(event) => handeleOnChangeReceita(event, 'modoPreparo')}
                    />
                    <button type='submit'>enviar</button>
                    <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
                </form>
            </ReactModal>
        </div>
    )
}
import { useState } from 'react';
import ReactModal from 'react-modal';
import CardReceita from './CardReceita';
import "./Style.css";

export default function FormularioReceita(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [receitaEstate, setReceitaEstate] = useState({
        nome:"",
        ingredientes:"",
        modoPreparo:""
    });
    const [receitas, setReceitas] = useState([]);

    const handeleOnChangeReceita = (event, key) => {
        setReceitaEstate({...receitaEstate,[key] : event.target.value })
    }

    const handleSingupFrorm = (event) => {
        event.preventDefault();
        setModalIsOpen(false);
        setReceitas([...receitas, receitaEstate]); // adiciona a nova receita ao estado
        setReceitaEstate({nome:"", ingredientes:"", modoPreparo:""}); // reseta o estado da receita
    }

    const handleExcluirReceita = (index) => {
        const novasReceitas = [...receitas];
        novasReceitas.splice(index, 1);
        setReceitas(novasReceitas);
    };
      
    const handleEditarReceita = (index, novaReceita) => {
        const novasReceitas = [...receitas];
        novasReceitas[index] = novaReceita;
        setReceitas(novasReceitas);
    };

    return(
        <div className="content">
            <button onClick={() => setModalIsOpen(true)}>Adicionar Receita</button>
            <ReactModal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Adicionar Receita Modal"
            >
                <form className="form" onSubmit={handleSingupFrorm}>
                    <input 
                        type="text"
                        placeholder="Nome da receita"
                        required
                        value={receitaEstate.nome}
                        onChange={(event) => handeleOnChangeReceita(event, 'nome')}
                    />
                    <input 
                        type="text"
                        placeholder="ingreditentes"
                        required
                        value={receitaEstate.ingredientes}
                        onChange={(event) => handeleOnChangeReceita(event, 'ingredientes')}
                    />
                    <input 
                        type="text"
                        placeholder="modo de preparo"
                        required
                        value={receitaEstate.modoPreparo}
                        onChange={(event) => handeleOnChangeReceita(event, 'modoPreparo')}
                    />
                    <button type='submit'>enviar</button>
                    <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
                </form>
            </ReactModal>
            <div className="receitas">
                {receitas.map((receita, index) => (
                    <CardReceita
                        key={index}
                        nome={receita.nome}
                        ingredientes={receita.ingredientes}
                        modoPreparo={receita.modoPreparo}
                        onExcluir={() => handleExcluirReceita(index)}
                        onEditar={(novaReceita) => handleEditarReceita(index, novaReceita)}
                    />
                ))}
            </div>
        </div>
    )
}*/
import { useState } from 'react';
import ReactModal from 'react-modal';
import CardReceita from './CardReceita';
import "./Style.css";

export default function FormularioReceita(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [receitaEstate, setReceitaEstate] = useState({
        nome:"",
        ingredientes:"",
        modoPreparo:""
    });
    const [receitas, setReceitas] = useState([]);

    const handeleOnChangeReceita = (event, key) => {
        setReceitaEstate({...receitaEstate,[key] : event.target.value })
    }

    const handleSingupFrorm = (event) => {
        event.preventDefault();
        setModalIsOpen(false);
        setReceitas([...receitas, receitaEstate]); // adiciona a nova receita ao estado
        setReceitaEstate({nome:"", ingredientes:"", modoPreparo:""}); // reseta o estado da receita
    }

    const handleExcluirReceita = (index) => {
        const novasReceitas = [...receitas];
        novasReceitas.splice(index, 1);
        setReceitas(novasReceitas);
    };
      
    const handleEditarReceita = (index, novaReceita) => {
        const novasReceitas = [...receitas];
        novasReceitas[index] = novaReceita;
        setReceitas(novasReceitas);
    };

    return(
        <div className="content">
            <button onClick={() => setModalIsOpen(true)}>Adicionar Receita</button>
            <ReactModal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Adicionar Receita Modal"
            >
                <form className="form" onSubmit={handleSingupFrorm}>
                    <input 
                        type="text"
                        placeholder="Nome da receita"
                        required
                        value={receitaEstate.nome}
                        onChange={(event) => handeleOnChangeReceita(event, 'nome')}
                    />
                    <input 
                        type="text"
                        placeholder="ingreditentes"
                        required
                        value={receitaEstate.ingredientes}
                        onChange={(event) => handeleOnChangeReceita(event, 'ingredientes')}
                    />
                    <input 
                        type="text"
                        placeholder="modo de preparo"
                        required
                        value={receitaEstate.modoPreparo}
                        onChange={(event) => handeleOnChangeReceita(event, 'modoPreparo')}
                    />
                    <button type='submit'>enviar</button>
                    <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
                </form>
            </ReactModal>
            <div className="receitas">
                {receitas.map((receita, index) => (
                    <CardReceita
                        key={index}
                        nome={receita.nome}
                        ingredientes={receita.ingredientes}
                        modoPreparo={receita.modoPreparo}
                        onExcluir={() => handleExcluirReceita(index)}
                        onEditar={(novaReceita) => handleEditarReceita(index, novaReceita)}
                    />
                ))}
            </div>
        </div>
    )
}