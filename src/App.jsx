import { useState } from 'react'
import './App.css'
import NotasForm from './components/NotasForm';

function App() {
  const [notas, setNotas] = useState([
    {
      id: 1,
      text: "Provas",
      conteudo: "Frame, DevWeb, iOS, Android",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Aniversarios",
      conteudo: "Lilian - 20/09",
      isCompleted: false,
    },
  ]);

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  const addNota =(text, conteudo) => {
    const newNotas = [...notas, {
      id: Math.floor(Math.random() * 10000),
      text,
      conteudo,
      isCompleted: false, 
    }
  ] 
  
  setNotas(newNotas) 

  }

  const removeNota = (id) => {
    const newNotas = [...notas]
    const filterNotas = newNotas.filter(nota => 
      nota.id !== id ? nota : null
    )
    setNotas(filterNotas)
  }

  const completeNota = (id) => {
    const newNotas = [...notas]
    newNotas.map((nota) => 
      nota.id === id ? (nota.isCompleted = !nota.isCompleted) : nota
    )
    setNotas(newNotas)
  }

  return (
    <>
      <div className="app">
        <h1>Gerenciamento de Notas</h1>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="notas-list">
          {notas
          .filter((nota) => filter === "All" 
          ? true 
          : filter === "Completed" 
          ? nota.isCompleted 
          : !nota.isCompleted 
          ) 
          .filter((nota) => 
            nota.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) => sort === "Asc" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text))
          .map((nota) => (
            <Nota key={nota.id} nota={nota} removeNota={removeNota} /> 
          ))}
        </div>
        <NotasForm addNota={addNota} />
      </div>
    </>
  );
}

export default App
