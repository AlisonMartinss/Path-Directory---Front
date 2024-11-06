import '../CriarModulo/Criarmodulo.css'
import '../../../public/Midias/etapas-img.png'
import Home2 from '../Home2/Home2';

function Criarmodulo () {
    return (
        <div className='main_modulo'>
            <header className='header_Path'>
                <div className='etapas'>
                    <img className='etapas-img' src="../../../public/Midias/etapas-img.png" alt="" />
                </div>

                <div className='textos_CTA'>
                    <div className='textos_CTA_tx txttA'>Criar Path</div>
                    <div className='textos_CTA_tx txttB'>Criar Modulo</div>
                </div>

                <div className='home_contanier'><Home2/></div>
            </header>

            <main className='CrMo-main'>
                <div className='modulo_input'>
                    <div className='CrMo-title'>
                        Modulo
                    </div>

                    <form className='CrMo-form' action="">
                        <div className='CrMo-input_Path'>
                        <input className='inside_input_Path' type="text" id="nome" name="nome" placeholder="Digite o nome do modulo"/>
                        </div>

                        <div className='CrMo-descricao'>
                        <textarea className='descricao_area' placeholder='Descreva seu Path . . .' id="description" name="description" rows="4" cols="50" maxlength="3000"></textarea>
                        </div>
                    </form>
                </div>
                
                <div className='CrMo-curso_input'>

                </div>
            </main>

   
        </div>

    )
}

export default Criarmodulo;