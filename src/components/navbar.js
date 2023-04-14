import 'bulma/css/bulma.min.css';
import styles from '../styles/navbar.module.css'

function NavBar() {
    return (
        <>
        <nav className={styles.navbar + " navbar"} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a href="/todos" className={"navbar-item " + styles.navitem}>
                        Home
                    </a>
                    <a href="/categories" className={"navbar-item " + styles.navitem}>                       
                        Categories
                    </a>
                    <a href="/done" className={"navbar-item " + styles.navitem}>                        
                        Completed
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;