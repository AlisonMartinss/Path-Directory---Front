import Home2 from "../Home2/Home2";
import Porcentagem from "../FunçõesGlobais/Barra Porcentagem/Porcentagem";
import CabecalhoPesquisa from "../FunçõesGlobais/CabecalhoPesquisa/CabecalhoPesquisa.jsx"
import '../Loby/Loby.css'

function Loby () {
    return(
    <div className="all">
        <header className="cabecalho_home"><Home2/></header>
    
        <form className="cabecalho_o">
            <input className="searchArea" type="text" placeholder="funciona?" id="pesquisa"/>
        </form>

       
        <main className="main">

                <div className="listagem">
                    <div className="curso">
                        <div className="curso_filho">Nome Do Curso 1</div>
                        <Porcentagem/>
                    </div>

                    <div className="curso">
                        <div className="curso_filho">Nome Do Curso 1</div>
                        <Porcentagem/>
                    </div>

                    <div className="curso">
                        <div className="curso_filho">Nome Do Curso 1</div>
                        <Porcentagem/>
                    </div>
                </div>  

                <div className="perfil">
                    <div className="perfil_jr">
                        <div>
                           <img className="fotoperfil" src="https://github.com/AlisonMartinss/Assets/blob/main/Captura%20de%20tela%202024-06-19%20141014.png?raw=true" alt="" />
                        </div>
                        <div className="info">
                            Credencial: Academica
                        </div>
                        <div  className="info">
                            Nome: Sivirino
                        </div>
                        <div  className="info">
                            Path Criados 
                        </div>
                    </div>

                </div>


        </main>
    </div> 

    )
}

export default Loby