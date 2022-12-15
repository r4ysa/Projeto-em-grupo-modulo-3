import ProjectForm from '../project/ProjectForm'
import styles from './Matricula.module.css'

function Matricula(){
    return (
        <div className={styles.matricula_container}>
            <h1>Realizar Matrícula</h1>
            <p>Faça aqui a matrícula do aluno</p>
            <ProjectForm btnText="Matricular aluno" />
        </div>

    )
}

export default Matricula