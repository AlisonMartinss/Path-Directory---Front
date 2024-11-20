import styles from '../Dicas/Dicas.module.css'

function Dicas (props) {
    return(
        <main className={styles.main}>
            <div className={styles.geral}>

                <div className={`${styles.d1} ${styles.all}`}>
                    {props.d1}
                    <div className={styles.ln1}>
                        <div className={styles.linha}></div>
                    </div>
                </div>

                <div className={`${styles.d2} ${styles.all}`}>
                  {props.d2}
                  <div className={styles.ln2}>
                    <div className={styles.linha}></div>
                  </div>
                </div>

                <div className={`${styles.d3} ${styles.all}`}>
                  {props.d3}
                  <div className={styles.ln3}>
                    <div className={styles.linha}></div>
                  </div>
                </div>

            </div>
        </main>

    )
}

export default Dicas