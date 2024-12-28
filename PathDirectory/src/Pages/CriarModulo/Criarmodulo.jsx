import '../CriarModulo/Criarmodulo.css'
import '../../../public/Midias/etapas-img.png'
import Home2 from '../Home2/Home2';
import {useEffect, useState} from 'react'

function Criarmodulo () {

    const [formData, setFormData] = useState({
      name: "",
      descripitions: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    useEffect(function() {
      console.log(formData.name);
      console.log(formData.descripitions);
    },[formData]);


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
                            <input onChange={(event) => handleInputChange(event)} className='CrMo-inside_input_Path' type="text" 
                            id="name" name="name" placeholder="Digite o nome do modulo"/>
                        </div>

                        <div className='CrMo-descricao'>
                            <textarea onChange={(event) => handleInputChange(event)} className='CrMo-descricao_area' 
                            placeholder='Descreva seu Path . . .' id="description" name="descripitions" rows="4" cols="50" 
                            maxlength="3000"></textarea>
                        </div>

                        <button className='CrMo-botao' type="submit">Enviar</button>
                    </form>
                </div>
            </main>

   
        </div>

    )
}

export default Criarmodulo;