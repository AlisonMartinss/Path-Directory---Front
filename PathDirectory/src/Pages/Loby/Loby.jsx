import Home2 from "../Home2/Home2";
import Porcentagem from "../FunçõesGlobais/Barra Porcentagem/Porcentagem";
import '../Loby/Loby.css'

function Loby () {
    return(
    <div className="all">
        <header><Home2/></header>
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
                        <div>
                            Credencial: Academica
                        </div>
                        <div>
                            Nome: Sivirino
                        </div>
                        <div>
                            Path Criados 
                        </div>
                    </div>

                </div>


        </main>
    </div> 

    )
}

export default Loby