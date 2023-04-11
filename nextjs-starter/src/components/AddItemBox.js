import 'bulma/css/bulma.min.css';
import styles from '../styles/todos.module.css'
import { useState } from 'react';



function AddItemBox({show, handleShowBox}) {

    if (show) {
        return (
            <button onClick={handleShowBox}>click to cancel</button>
        )
    }
    else {
        return (
            <div onClick={handleShowBox} class={styles.additem}>
                <button onClick={handleShowBox} id="addbutton" class={styles.addbutton}><i class="fa-solid fa-plus"></i> Add task</button>
        </div>
        )
    }
}

export default AddItemBox;