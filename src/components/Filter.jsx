import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='filter-options'>
            <div>
                <p>STATUS:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Add">Adicionadas</option>
                    <option value="Delete">Excluidas</option>
                </select>
            </div>
            <div>
                <p>ORDEM ALFABÉTICA:</p>
                <button onClick={() => setSort("Asc")}>Asc</button> 
                <button onClick={() => setSort("Desc")}>Desc</button> 
            </div>
        </div>
    </div>
  )
}

export default Filter