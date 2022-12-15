
import ProjectForm from '../project/ProjectForm2'
import styles from './Matricula.module.css'

function Professores(){
    return (
        <div className={styles.matricula_container}>
            <h1>Realizar Matrícula</h1>
            <p>Faça aqui a matrícula do professor</p>
            <ProjectForm btnText="Matricular Professor" />
        </div>

    )
}

export default Professores