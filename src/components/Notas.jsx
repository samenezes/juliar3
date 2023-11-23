import React from 'react'

const Nota = ({ nota, removeNota }) => {
    return (
        <div className="nota" 
        style={{textDecoration: nota.isCompleted ? "line-through" : ""}}> {/* no style está sendo colocado uma linha se a tarefa estiver completa, se não tiver não é colocado nada, isso é feito baseado no isCompleted */}
            <div className="content">
                <p>{nota.text}</p>
                <p className="conteudo">({nota.conteudo})</p>
              </div>
              <div>
                <button className='complete' onClick={() => completeNota(nota.id)}>Completa</button>
                <button className='remove' onClick={() => removeNota(nota.id)}>DELETE</button>
              </div>
            </div>
    )
}

export default Nota
