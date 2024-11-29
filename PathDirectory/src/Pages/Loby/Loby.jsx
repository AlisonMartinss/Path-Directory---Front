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
                        <div className={styles.corpo_lembrete}>
                            <div className={styles.lembrete_txt}>
                                Testando os recados deixados para motivar o usuario.
                            </div>

                            <div className={styles.lembrete_txt}>
                                TESTE
                            </div>
                            

                        </div>

                    </div>

                    <div className={styles.corpo_c3}>
                        <div className={styles.corpo_perfil}>
                            <div className={styles.perfil_midias}>
                                <img className={styles.perfil_banner} src="https://extra.globo.com/incoming/25082691-3fe-9d8/w1920h1080/pericles_sampa_2020_-1624-2-edit.jpg" alt="imagem"/>
                            </div>
                            <div className={styles.midias_perfil}>
                                <img className={styles.perfil_img} src="https://jpimg.com.br/uploads/2017/04/2796996016-sheldon-pode-ganhar-serie-propria-reproducao.jpg" alt="" />
                            </div>

                            <div className={styles.perfil_infos}>
                                <div className={`${styles.info_nome} ${styles.global_format_info}`}>
                                    Alison Soares
                                </div>

                                <div className={styles.idEndereco}>ID:6489646</div>

                                <div className={`${styles.info_titulacao} ${styles.global_format_info}`}>
                                    Dicente de graduação
                                </div>

                                <div className={styles.preferencias}>Editar preferencias

                                </div>


                            </div>

                        </div>

                    </div>
                </div>

            </main>
        </body>
   

    )
}

export default Loby