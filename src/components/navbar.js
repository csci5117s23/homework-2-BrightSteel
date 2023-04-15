import 'bulma/css/bulma.min.css';
import styles from '../styles/navbar.module.css'
import Redirect from '../pages/redirect';
import { useRouter } from 'next/router';
import { UserButton, useClerk } from '@clerk/clerk-react';

function NavBar() {

    const router = useRouter();

    const { signOut } = useClerk();

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
                    
                    <a onClick={() => router.push('/done')} className={"navbar-item " + styles.navitem}>                        
                        Completed
                    </a>

                    <a onClick={() => signOut()} className={"navbar-item " + styles.navitem}>                       
                        Sign Out
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;