import '../Botão/Botao.css'

function Botao(props){
    return(
        <div>
            <button className='botao'>{props.texto}</button>
        </div>
    )
}

export default Botao