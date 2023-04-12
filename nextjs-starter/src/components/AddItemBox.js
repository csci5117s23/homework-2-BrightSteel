import 'bulma/css/bulma.min.css';
import styles from '../styles/todos.module.css'

function AddItemBox({show, handleShowBox}) {

    if (show) {
        return (
            <div style={{paddingTop: "1em"}}>
            <form id="usrform">
            <div className="field">
                <label className="label">Task Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" required></input>
                </div>
            </div>
            <div className="field">
            <label className="label">Category</label>
            <div className="control">
                <div className="select">
                <select  name="category" id="category" required>
                    <option value="">Select Category</option>
                    <option value="1">Option1</option>
                </select>
                </div>
            </div>
            </div>
            <div className="field">
            <label className="label">Description</label>
            <div className="control">
                <textarea className="textarea" placeholder="Textarea" required></textarea>
            </div>
            </div>
            <div className="field is-grouped">
            <div className="control">
                <button className="button is-link">Submit</button>
            </div>
            <div className="control">
                <button onClick={handleShowBox} className="button is-link is-light">Cancel</button>
            </div>
            </div>
            </form>
            
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