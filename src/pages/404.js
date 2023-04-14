import NavBar from "../components/navbar";
import styles from '../styles/todos.module.css'
import 'bulma/css/bulma.min.css';

const Page = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className={styles.body} style={{paddingTop: "3.5em"}}>
            <div className="columns is-centered">
                <h1 style={{fontSize: "x-large", fontWeight: "bold"}}>The page you're looking for can't be found</h1>
            </div>
            <div className="columns is-centered" style={{paddingTop: "0.5em"}}>
                    <a href="/todos">Back to home</a>
                </div>
            </div>
        </div>
    )
}

export default Page;