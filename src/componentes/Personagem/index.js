import './Personagem.css'

function Personagem() {
    return (
        <div className='personagem'>

            <div className="cabecalho" style={{ backgroundColor: corPrimaria }}/>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
            </div>
        </div >
    )
    
}