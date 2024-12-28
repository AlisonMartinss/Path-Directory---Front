import '../Conteudo/ConteudoCSS.css'
import '../../../public/Midias/etapas-img.png'
import Home2 from '../Home2/Home2';
import Duvidas from '../FunçõesGlobais/Duvidas/Duvidas';
import Dicas from '../FunçõesGlobais/Dicas/Dicas';
import '../../../public/Midias/comoLidar.png'
import {useEffect, useState} from 'react'

function Conteudo () {

    /*const [formClass, setClass] = useState([{
        name:"",
        title:"",
        link:"",
        description:"",
        model:""
    }])*/
        const [contagem, setContagem] = useState(0); // Estado para contagem

        function atribuir() {
          setContagem(contagem + 1); // Incrementa o estado
          alert(contagem); // Mostra o próximo valor
        }
    const [formClass, setClass] = useState([]);

    const [titleData,setTitle] = useState("");
    const [linkData,setLink]   = useState("");
    const [descData,setDesc]   = useState("");
    const [modelData,setModel]   = useState("");

    const addAula = () => {
        setClass([
            ...formClass,
        {
            title:titleData,
            link:linkData,
            description:descData,
            model:modelData
        }]);
    }

    const clearCamp = () => { 
        setTitle("");
        setLink("");       
        setDesc("");
        setModel("");
    }

    const mostraLista = () =>{
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ")
        for (let i = 0; i < formClass.length; i++){
            console.log(formClass[i]);
        }
    }

    useEffect(function() {
        mostraLista();
      },[formClass,contagem]);

    return (
       
        <div className='cud-main'>
            <header className='cud-header'>
                <div className='cud-home-c'><Home2/></div>
            </header>    
            <main className='cud-corpo'>
                
                    <form className='cud-form'>
                        <div className='cud-input_Path cud-input-tit'>
                            <input onChange={(event => setTitle(event.target.value))} className='cud-inside_name cud_inside-glo global-txt' 
                            type="text" id="nome" name="name" placeholder="Digite o titulo da aula"/>
                            <div className='cud-mat' ></div>
                        </div>

                        
                        <div className='cud-input_Path cud-input-lin'>
                            <input onChange={(event => setLink(event.target.value))} className='cud-inside_link cud_inside-glo global-txt' type="text" 
                            id="nome" name="link" placeholder="Cole o link do conteudo"/>

                            <select onChange={(event => setModel(event.target.value))} className='cud-opc' id="opcoes" name="opcao">
                                <option value="yTube">Video no YouTube</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        

                        <div className='cud-descricao '>
                            <textarea onChange={(event => setDesc(event.target.value))} className='cud-descricao_area global-txt' placeholder='Adicione uma descrição a essa aula (opcional)' id="description" name="description" rows="4" cols="50" maxlength="3000"></textarea>
                        </div>

                        <div className='botoes'>
                            <button className='cud-botao' type="submit">
                                Enviar
                            </button>

                            <button onClick={(event) => {event.preventDefault();
                                addAula();
                                clearCamp();
                                mostraLista();
                                atribuir()
                            ;}} 
                            className='cud-botaoSalvar' type="submit">
                                Salvar
                            </button>
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