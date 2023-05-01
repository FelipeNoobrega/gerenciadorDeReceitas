import CardReceita from "./CardReceita";

export default function ListaReceitas({ receitas }) {
  return (
    <div>
      {receitas.map((receita, index) => (
        <CardReceita
          key={index}
          nome={receita.nome}
          ingredientes={receita.ingredientes}
          modoPreparo={receita.modoPreparo}
        />
      ))}
    </div>
  );
}
