import styles from '../ConteudoPath/ConteudoPath.module.css'
import Home2 from '../Home2/Home2'

function ConteudoPath () {
    return (
        <body className={styles.body}>
            <header className={styles.header}>
             <Home2/>
            </header>
            <main className={styles.main}>

                <div className={styles.lista}>
                    <div className={styles.lista_item}>
                        <div>Item 1</div>
                    </div>

                    <div className={styles.lista_item}>
                        <div>Item 2</div>
                    </div>

                    <div className={styles.lista_item}>
                        <div>Item 3</div>
                    </div>
                </div>
                
         

                <div className={styles.perfil_desc}>
                    <div className={styles.desc_perfil}>
                        <div className={styles.perfil_foto}>
                            <img className={styles.foto} src="https://jpimg.com.br/uploads/2017/04/2796996016-sheldon-pode-ganhar-serie-propria-reproducao.jpg" alt="foto de perfil" />
                        </div>
                        <div className={styles.info_perfil}>
                            <div className={`${styles.perfil_nome} ${styles.txt}`}>Sheldon Cooper</div>
                            <div className={`${styles.redes_contato} ${styles.txtG}`}>
                                <div className={styles.redeG}><a href=""><img src="" alt="" /></a></div>
                                <div className={styles.redeG}><a href=""><img src="" alt="" /></a></div>
                                <div className={styles.redeG}><a href=""><img src="" alt="" /></a></div>
                            </div>

                        </div>

                    </div>

                    <h4 className={`${styles.h4}`}>Sobre o <strong className={styles.strong}>Path:</strong></h4>

                    <div className={styles.desc_desc}>
                        <div className={styles.adjetivos}>
                            <div className={`${styles.adjetivos_carac} ${styles.adjetivo01}`}>Adjetivo 1</div>
                            <div className={`${styles.adjetivos_carac} ${styles.adjetivo02}`}>Adjetivo 2</div>
                            <div className={`${styles.adjetivos_carac} ${styles.adjetivo03}`}>Adjetivo 3</div>
                            <div className={`${styles.adjetivos_carac} ${styles.adjetivo04}`}>Adjetivo 4</div>
                            <div className={`${styles.adjetivos_carac} ${styles.adjetivo05}`}>Adjetivo 5</div>
                        </div>
                        <div className={`${styles.desc_Descritivo} ${styles.txtV2}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>

                </div>

            </main>
        </body>

    )
}

export default ConteudoPath