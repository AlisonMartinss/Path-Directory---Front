import Home2 from "../Home2/Home2";
import Porcentagem from "../FunçõesGlobais/Barra Porcentagem/Porcentagem";
import '../Loby/Loby.css'
import '../../../public/Midias/Lapis-Edit.png'
import '../../../public/Midias/lupa.png'


function Loby () {
    return(
    <div className="all">
        <header className="cabecalho_home"><Home2/></header>
    
        <form className="cabecalho_o">
            <input className="searchArea" type="text" placeholder="funciona?" id="pesquisa"/>
            <div className="searchButton">
                <button className="searchButton_jr"  type="submit"><img className="icone_lupa" src="../../../public/Midias/lupa.png" alt="" /></button>
            </div>
        </form>

       
        <main className="main">

                <div className="listagem">
                    <div className="curso">
                        <div className="fav_icon">favoritismo</div>
                        <div className="curso_filho">Nome Do Curso 1</div>
                        <Porcentagem/>
                    </div>

                    <div className="curso">
                        <div className="fav_icon">favoritismo</div>
                        <div className="curso_filho">Nome Do Curso 1</div>
                        <Porcentagem/>
                    </div>

                    <div className="curso">
                        <div className="fav_icon">favoritismo</div>
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

                          <div className="info_jr">
                            Nome: Alison
                          </div>

                          <div className="editar_info">
                            <img className="icon"  src="../../../public/Midias/Lapis-Edit.png" alt="" />
                          </div>

                        </div>

                        <div className="info">

                            <div className="info_jr">
                                Credencial: Academica
                            </div>

                            <div className="editar_info">
                                <img className="icon"  src="../../../public/Midias/Lapis-Edit.png" alt="" />
                            </div>

                        </div>




    
                      
                        <div  className="redes_sociais">
                            <div className="lattes rede_jr">
                                <img className="icon" src="../../../public/Midias/Logo-Ref-Linkedim.png" alt="" />
                            </div>

                            <div className="linkedim rede_jr">
                                <img className="icon" src="../../../public/Midias/Logo-Ref-Linkedim.png" alt="" />
                            </div>

                            <div className="github rede_jr">
                                <img className="icon" src="../../../public/Midias/Logo-Ref-Linkedim.png" alt="" />
                            </div>

                        </div>
                    </div>

                </div>


        </main>
    </div> 

    )
}

export default Loby