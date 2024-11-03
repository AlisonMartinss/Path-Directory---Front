import '../../FunçõesGlobais/CaixaInput/CaixaInput.css'

function CaixaInput () {
    return (
    <select className='opcoes_input'  id="opcoes" name="opcoes">

        <option value="adjetivo1">- Direto ao ponto</option>
        <option value="adjetivo2">- Para passar na prova</option>
        <option value="adjetivo3">- Aulas de aprofundamento</option>
        <option value="adjetivo4">- Material longo</option>
        <option value="adjetivo5">- Material curto</option>

        <option value="adjetivo6">- Material teórico</option>
        <option value="adjetivo7">- Material pratico</option>
        <option value="adjetivo8">- Para iniciantes</option>
        <option value="adjetivo9">- Para intermediários</option>
        <option value="adjetivo10">- Para avançados</option>

        <option value="adjetivo11">- Para revisão rápida</option>
        <option value="adjetivo12">- Voltada para provas específicas</option>
        <option value="adjetivo13">- De reforço</option>
        <option value="adjetivo14">- Orientada a projetos</option>
        <option value="adjetivo15">- Para aplicação no mercado</option>


        
    </select>

    )
}

export default CaixaInput;