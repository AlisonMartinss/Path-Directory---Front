import '../Path/Path.css'
import Home2 from "../Home2/Home2";
import CaixaInput from '../FunçõesGlobais/CaixaInput/CaixaInput';
import '../../../public/Midias/etapas-img.png'

function Path () {
return (
<main className="all_Path">

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

    <div className='central'>
        <form className='form_Path' action="">
            <input className='inside_input_Path' type="text" id="nome" name="nome" placeholder="Digite o nome do seu Path"/>

            <div className='CTO'>
                Selecione cinco <strong className='stg_Path'>adjetivos</strong> que melhor descrevem o seu Path:
            </div>

            <div className='adjetivos_Path'>
              <CaixaInput/>
              <CaixaInput/>
              <CaixaInput/>
              <CaixaInput/>
              <CaixaInput/>
            </div>
        </form>

    </div>

   
</main>
 )
} 

export default Path;
