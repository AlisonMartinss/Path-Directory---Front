import '../Conteudo/ConteudoCSS.css'
import '../../../public/Midias/etapas-img.png'
import Home2 from '../Home2/Home2';
import Duvidas from '../FunçõesGlobais/Duvidas/Duvidas';
import Dicas from '../FunçõesGlobais/Dicas/Dicas';
import '../../../public/Midias/comoLidar.png'

function Conteudo () {
    return (
       
        <div className='cud-main'>
            <header className='cud-header'>
                <div className='cud-home-c'><Home2/></div>
            </header>    
            <main className='cud-corpo'>
                
                    <form className='cud-form'>
                        <div className='cud-input_Path cud-input-tit'>
                            <input className='cud-inside_name cud_inside-glo global-txt' type="text" id="nome" name="nome" placeholder="Digite o titulo da aula"/>
                            <div className='cud-mat' ></div>
                        </div>

                        
                        <div className='cud-input_Path cud-input-lin'>
                            <input className='cud-inside_link cud_inside-glo global-txt' type="text" id="nome" name="nome" placeholder="Digite o link do conteudo"/>

                            <select className='cud-opc' id="opcoes" name="opcao">
                                <option value="yTube">Video no YouTube</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        

                        <div className='cud-descricao '>
                            <textarea className='cud-descricao_area global-txt' placeholder='Descreva seu Path . . .' id="description" name="description" rows="4" cols="50" maxlength="3000"></textarea>
                        </div>

                        <div className='botoes'>
                         <button className='cud-botao' type="submit">Enviar</button>
                         <button className='cud-botaoSalvar' type="submit">Enviar</button>

                        </div>

                        
                    </form>
            </main>
            <div className='duvidas'>
                <Duvidas img={'../../../public/Midias/comoLidar.png'} link={'https://www.youtube.com/watch?v=GHpJ0STOfWc&list=RDMM&index=11'}/>
            </div>
            <div className='dicas'>
                <Dicas d1={'1) Fale sobre o assunto que será abordado na aula.'} d2={'2) Pontue os topicos do assunto abordado.'} d3={'3) Pontue os momentos em que cada topico será abordado.'}/>
            </div>
        </div>
    )
}

export default Conteudo; 