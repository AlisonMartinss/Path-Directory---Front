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
                        
                        <div className="curso_filho">Nome Do Curso 3</div>
                        <Porcentagem/>
                    </div>
                    <div className="curso">
                       <div className="curso_filho">Nome Do Curso 3</div>
                       <Porcentagem/>
                    </div>
                </div>  
        </main>
    </div> 

    )
}

export default Loby