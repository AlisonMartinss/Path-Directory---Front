import styles from '../Loby/Loby.module.css'
import Home2 from '../Home2/Home2'
import CarroselY from '../FunçõesGlobais/CarroselY/CarroselY'
import Barrapesquia from '../FunçõesGlobais/BarraPesquisa/Barrapesquisa';

import { useState, useRef, useEffect } from 'react';

function Loby () {
    const [dimnecoesL,setdimencoesL] = useState ({width:0,higth: 0});
    const usoRef = useRef();

    useEffect(() => {
        if (usoRef.current) {
            const largura = usoRef.current.offsetWidth;
            const altura = usoRef.current.offsetHeight;
            setdimencoesL({ width: largura, height: altura });
        }
    }, []);

    useEffect(() => {
        console.log(`Div Size: ${JSON.stringify(dimnecoesL)}`);
    }, [dimnecoesL]);

    return(
     

        <body className={styles.body}>
            <header className={styles.header}>
                <Home2/>
            </header>
            <main className={styles.main}>
                <div className={styles.main_pesquisa}>
                    <Barrapesquia/>
                </div>

                <div className={styles.main_corpo}>
                    <div className={styles.corpo_c1}>
                        <CarroselY/>
                    </div>

                    <div ref={usoRef} className={styles.corpo_c2}>

                    </div>

                    <div className={styles.corpo_c3}>
                        <div className={styles.corpo_perfil}>
                            <div className={perfil_midias}>

                            </div>

                        </div>

                    </div>
                </div>

            </main>
        </body>
   

    )
}

export default Loby