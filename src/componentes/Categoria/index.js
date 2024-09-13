import './Categoria.css'

function Categoria(props){
    return (
        <section className='Categoria' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='divpersonnagem'>

            </div>
        </section>
    )
}
export default Categoria;