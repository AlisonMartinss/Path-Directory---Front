import '../Conteudo/ConteudoCSS.css'
import '../../../public/Midias/etapas-img.png'
import Home2 from '../Home2/Home2';

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
                        </div>

                        <div className='cud-input_Path cud-input-lin'>
                            <input className='cud-inside_link cud_inside-glo global-txt' type="text" id="nome" name="nome" placeholder="Digite o link do conteudo"/>
                        </div>

                        <div className='cud-descricao '>
                            <textarea className='cud-descricao_area global-txt' placeholder='Descreva seu Path . . .' id="description" name="description" rows="4" cols="50" maxlength="3000"></textarea>
                        </div>

                        <button className='cud-botao' type="submit">Enviar</button>
                    </form>
            
               
            </main>
        </div>
    )
}

export default Conteudo; 