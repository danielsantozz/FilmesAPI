import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/"><span>FilmesAPI</span></Link>
            <nav>
                <Link to="/comedia">Comédia</Link>
                <Link to="/terror">Terror</Link>
                <Link to="/ficcaocientifica">Ficção Científica</Link>
                <Link to="/aventura">Aventura</Link>
                <Link to="/acao">Ação</Link>
                <Link to="/drama">Drama</Link>
                <Link to="/romance">Romance</Link>
            </nav>
        </header>
    )    
}

export default Header