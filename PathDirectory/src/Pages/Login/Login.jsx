import Home2 from "../Home2/Home2";
import '../Login/Login.css'
import '../FunçõesGlobais/Botão/Botao.css'

function Login () {
    return(
<div >
    <header><Home2 n2={"Home"} L2={"http://localhost:5173"} n3={"Central De Ajuda"}/></header>
    <main>
        <div className="form">
            <form className="form_form"  action="">
                <div className="form_neto">
                    <input className="inside_input"  type="text" id="user" placeholder="Digite seu usuario" required
                    maxlength="25" minlength="15"/>
                </div>

                <div className="form_neto">
                    <input className="inside_input"  type="password" id="password" placeholder="Digite sua senha"
                    maxlength="30" minlength="12"/>
                </div>
                
                <div className="entrar_b">
                    <button type="submit" className="inside_entrar botao">Entrar</button>
                </div>

                <a href="" className="esqueceu">Esqueçeu a Senha?</a>
               
            </form>
        </div>
    </main>

    

</div>        

    
 )
}

export default Login;