import { useState } from 'react'

const NotasForm = ({ addNotas }) => {

    const [titulo, setTitulo] = useState("")
    const [conteudo, setConteudo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault() 
        if(!titulo || !conteudo) return 
        console.log(titulo, conteudo)
        
        addNotas(titulo, conteudo)
        setTitulo("")
        setConteudo("")

    }
    
    return (
        <div className="nota-form">
            <h2>Criar Nota:</h2>
            <form onSubmit={handleSubmit}> {/* a cada vez que o formulario for enviado, a handleSubmit é disparada */}
                <input type="text" placeholder="Digite o titulo;" value={titulo} onChange={(e) => setTitulo(e.target.titulo)}></input>
                <input type="text" placeholder="Digite o conteudo:" value={conteudo} onChange={(e) => setConteudo(e.target.conteudo)}></input>
                <button type="submit">ADD NOTA</button>
            </form>
        </div>
    )
}

export default NotasForm