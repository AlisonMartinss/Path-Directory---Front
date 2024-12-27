import '../Path/Path.css'
import Home2 from "../Home2/Home2";
import CaixaInput from '../FunçõesGlobais/CaixaInput/CaixaInput';
import '../../../public/Midias/etapas-img.png'
import {useEffect, useState} from 'react'

function Path () {
  /*
  - Lista de adjetivos para guardar os inputas de adjetovos.
  
  */
   const [adjectives, setadjectives] = useState([]);
   const [pathName, setPath] = useState();
   const [description, setDesc] = useState();



  const handleChange = (event,index) => {
    const newArray = [...adjectives];
    newArray.splice(index,0,event.target.value);
    setadjectives(newArray);
  };

  useEffect(function() {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    for (let i = 0; i < adjectives.length; i++){
      console.log(adjectives[i]);
    }
  }, [adjectives]);  // Dependendo de `index` e `adjetivosLista`, o efeito será executado


  useEffect(function() {
    console.log(pathName);
    console.log(description);
  },[description,pathName]);
  
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
            <div className='input_Path'>
              <input onChange={(event) => setPath(event.target.value)} className='inside_input_Path' type="text" id="nome" name="nome" placeholder="Digite o nome do seu Path"/>
            </div>
            
            <div className='CTO'>
                Selecione cinco <strong className='stg_Path'>adjetivos</strong> que melhor descrevem o seu Path:
            </div>

            <div className='adjetivos_Path'>
              <CaixaInput setInputs={(event) => handleChange(event,0)}/>
              <CaixaInput setInputs={(event) => handleChange(event,1)}/>
              <CaixaInput setInputs={(event) => handleChange(event,2)}/>
              <CaixaInput setInputs={(event) => handleChange(event,3)}/>
              <CaixaInput setInputs={(event) => handleChange(event,4)}/>
            </div>

            <div className='descricao'>
             <textarea onChange={(event) => setDesc(event.target.value)} className='descricao_area' placeholder='Descreva seu Path . . .' id="description" name="description" rows="4" cols="50" maxlength="3000"></textarea>
            </div>

            <input onChange={} className='submit_Path' type="submit" value="Enviar"></input>
           
        </form>

    </div>

   
</main>
 )
} 

export default Path;
