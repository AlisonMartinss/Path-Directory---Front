import styles from '../PathsExplorer/PathEx.module.css'
import Home2 from '../Home2/Home2'
import Barrapesquia from '../FunçõesGlobais/BarraPesquisa/Barrapesquisa'

function PathExplorer () {
    return (
  
     <body className={styles.body}>
        <header className={styles.header}>
          <Home2/>
        </header>
        <main className={styles.main}>
          <div className={styles.pesquisa}> <Barrapesquia/> </div>
          <div className={styles.tumb}>
              <div className={styles.tumb_path}>

                  <div className={styles.path_backg}>
                    
                  </div>

                  <div className={styles.path_perfil}>
                    <div className={styles.perfil_foto}>

                    </div>

                    <div className={styles.perfil_titulo}>Alison Soares</div>
                    
                  </div>

                  <div className={styles.path_titulo}>Titulo exemplar</div>

              </div>
          </div>

        </main>

                
    </body>

       

    )
}

export default PathExplorer