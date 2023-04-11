import 'bulma/css/bulma.min.css';
import styles from '../styles/todos.module.css'

function AddItemBox({show, handleShowBox}) {

    if (show) {
        return (
            <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
            </form>
            <button onClick={handleShowBox}>click to cancel</button>
            </div>
        )
    }
    else {
        return (
            <div onClick={handleShowBox} className={styles.additem}>
                <button onClick={handleShowBox} id="addbutton" className={styles.addbutton}><i className="fa-solid fa-plus"></i> Add task</button>
            </div>
        )
    }
}

export default AddItemBox;