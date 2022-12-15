import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../img/logo-colégio.png'

function NavBar(){
    return(
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                <img src={logo} alt="C. Cabral" className={styles.logo} />
                </Link>
                <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/alunos">Alunos</Link></li>
                <li className={styles.item}><Link to="/professores">Professores</Link></li>
                <li className={styles.item}><Link to="/turmas">Turmas</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar