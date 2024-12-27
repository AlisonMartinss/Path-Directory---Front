import '../../FunçõesGlobais/CaixaInput/CaixaInput.css'
import {useState} from 'react';

function CaixaInput (props) {

 
    return (

    <select onChange={props.setInputs} className='opcoes_input'  id="opcoes" name="opcoes">

        <option value="Direto ao ponto">- Direto ao ponto</option>
        <option value="Para passar na prova">- Para passar na prova</option>
        <option value="Aulas de aprofundamento">- Aulas de aprofundamento</option>
        <option value="Material longo">- Material longo</option>
        <option value="Material curto">- Material curto</option>

        <option value="Material teórico">- Material teórico</option>
        <option value="Material pratico">- Material pratico</option>
        <option value="Para iniciantes">- Para iniciantes</option>
        <option value="Para intermediários">- Para intermediários</option>
        <option value="Para avançados">- Para avançados</option>

        <option value="Para revisão rápida">- Para revisão rápida</option>
        <option value="Voltada para provas específicas">- Voltada para provas específicas</option>
        <option value="De reforço">- De reforço</option>
        <option value="Orientada a projetos">- Orientada a projetos</option>
        <option value="Para aplicação no mercado">- Para aplicação no mercado</option>
 
    </select>

    )
}

export default CaixaInput;