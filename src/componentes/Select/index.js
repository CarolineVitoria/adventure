import './Select.css'

function Select(props) {
    return (
        <div className="select">
            <label>Categorias</label>
            <select
                required={props.obrigatorio}
                value={"teste"}
            >
                <option value=""></option>
                {props.categoria.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default Select;