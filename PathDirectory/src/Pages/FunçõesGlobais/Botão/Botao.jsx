import '../Botão/Botao.css'

function Botao(props){
    return(
        <div>
            <button>{props.texto}</button>
        </div>
    )
}

export default Botao