import styles from './form.module.css'

import Input from '../form/Input'
import Select from '../form/Select'

function formturma(){
    return(
        <form className={styles.form}>

        <Select name="turno" text="Informe o turno"/>

        <Input type="number" text="Número da sala" name="name"/>
        
        <Select name="turno" text="Informe o ano"/>

        <Input type="number" text="Quantidade de alunos" name="name"/>

        <input type="submit"  value="Criar turma" />

        </form>
    )
}

export default formturma