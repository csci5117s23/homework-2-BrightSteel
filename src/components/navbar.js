import 'bulma/css/bulma.min.css';
import styles from '../styles/navbar.module.css'
import Redirect from '../pages/redirect';
import { useRouter } from 'next/router';

function NavBar() {

    const router = useRouter();

    return (
        <>
        <nav className={styles.navbar + " navbar"} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a onClick={() => router.push('/todos')} className={"navbar-item " + styles.navitem}>
                        Home
                    </a>
                    <a href='https://magical-molly-92.accounts.dev/sign-in' className={"navbar-item " + styles.navitem}>                       
                        Sign Out
                    </a>
                    <a onClick={() => router.push('/done')} className={"navbar-item " + styles.navitem}>                        
                        Done
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;