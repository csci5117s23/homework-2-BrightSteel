import 'bulma/css/bulma.min.css';
import styles from '../styles/navbar.module.css'
import Redirect from '../pages/redirect';
import { useRouter } from 'next/router';
import { SignedIn, SignedOut, UserButton, useClerk, useSignIn } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';

function NavBar() {

    const router = useRouter();

    const { signOut } = useClerk();

    function handleClick() {
        signOut()
        setTrigger(true)
        
    }

    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        let interval;
        if (trigger) {
          interval = setInterval(() => router.push("/"), 1000);
        }
        return () => clearInterval(interval);
      }, [trigger])

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
                    <SignedIn>
                    <a onClick={handleClick} className={"navbar-item " + styles.navitem}>                       
                        Sign Out
                    </a>
                    </SignedIn>
                    <SignedOut>
                    <a href="https://magical-molly-92.accounts.dev/sign-in" className={"navbar-item " + styles.navitem}>                       
                        Sign In
                    </a>
                    </SignedOut>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;