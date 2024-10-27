import '../Path/Path.css'
import Botao from '../FunçõesGlobais/Botão/Botao';

function Path () {
return (
<main className="all_Path">
    <div className='formulario'>
        <form className='formulario_jr' action="">
                <div className="input_titulo_modulo">
                    <input className='input_titulo_modulo_jr' type="text" id="user" placeholder="Digite O Titulo do Modulo" required
                    maxlength="25" minlength="15"/>
                </div>
                

                <div className='formulario_aula_titulo'>   
                  <input className="input_titulo"  type="text" id="user" placeholder="Digite O Titulo da Aula" required
                  maxlength="25" minlength="15"/>

                  <div className='label_Path'>
                  <label for="numero"><div>Selecione o numero correpondente</div><div>a colocação da aula:</div></label>
                    <select className='caixaOPnumero' id="numero">
                        <option value="10">1</option>
                        <option value="20">2</option>
                        <option value="30">3</option>
                        <option value="40">4</option>
                        <option value="50">5</option>

                        <option value="10">6</option>
                        <option value="20">7</option>
                        <option value="30">8</option>
                        <option value="40">9</option>
                        <option value="50">10</option>

                        <option value="10">11</option>
                        <option value="20">12</option>
                        <option value="30">13</option>
                        <option value="40">14</option>
                        <option value="50">15</option>
                    </select>
                  </div>

                </div>

                <div className='formulario_link'>
                    <input className="input_Path_link input_titulo"  type="text" id="user" placeholder="Digite o link do conteudo" required
                    maxlength="25" minlength="15"/>

                    <div className='label_Path'>

                            <label className='label_Path_' for="numero">Selecione formato do conteudo:</label>
                            <select className='SelectStyle formatoConteudo' id="numero">
                                <option value="1">
                                <div>
                                    <h5> Video No YouTube:</h5>
                                    <h6> O video que você pretende colocar está no YouTube.</h6>
                                </div>
                                </option>


                                <option value="2">

                                <div>
                                    <h5> Outro:</h5>
                                    <h6> O conteudo que você pretende colocar não está no YouTube.</h6>
                                </div>

                                </option>
                                
                            </select>
                    </div>
                </div>

                <div className='descricao'>
                    <textarea className='input_Path_desc' id="description" name="description"
                    rows="4" cols="50" placeholder="Digite a descrição da aula..."></textarea>
                </div>

                <div className='acoes'>
                    <Botao texto={"Salvar"}/>
                    <input className='acoes_definitivas b_enviar' type="submit" value="Enviar"/>
                    <input className='acoes_definitivas b_salvar' type="submit" value="Salvar"/>
                </div>
        </form>
    </div>
</main>




)
} 

export default Path;
