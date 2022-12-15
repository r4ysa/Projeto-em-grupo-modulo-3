import styles from './Criarturma.module.css'
import Formulário from '../forms/formturma'

function Criarturma(){
    return(
        <div className={styles.criarturma_container}>
            <h1>Criar turma</h1>
            <p>Adicione uma nova turma!</p>
            <Formulário />
        </div>
    )
}

export default Criarturma