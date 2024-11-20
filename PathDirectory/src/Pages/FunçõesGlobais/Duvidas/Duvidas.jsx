import React from "react";
import styles from '../../FunçõesGlobais/Duvidas/Duvidas.module.css'

//import '../../../../public/MidiascomoLidar.png'

function Duvidas (props){
    return (
        <main className={styles.main}>
            <div className={styles.duvi}>
                <div className={styles.txt}> Está com duvidas de como</div>

                <div className={styles.txt}>
                    lidar com essa etapa? <a className={styles.al} href={props.link}>clique aqui</a>
                </div>

                
            </div>

            <img className={styles.img} src={props.img} alt="imagem" />
        </main>
            


    )
}

export default Duvidas;