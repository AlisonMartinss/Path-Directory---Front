import styles from '../BarraPesquisa/Barrapesquisa.module.css'


function Barrapesquia (){
    return (
        <div className={styles.main}>
            <input type="text" id='pesquisa' name='pesquisa' className={styles.barraPesquisa}/>
        </div>

    )
}

export default Barrapesquia