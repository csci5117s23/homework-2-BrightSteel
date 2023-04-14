import 'bulma/css/bulma.min.css';
import styles from '../styles/todos.module.css'
import { useState } from 'react';


function AddCategoryBox() {

    const [show, setShow] = useState(false)
    // form state based off of https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/
    const [formState, setFormState] = useState({
        name: "",
        user_id: ""
    })

    const handleShowBox = () => {
        setShow(!show)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    //     postTodoEntry(formState)
        setShow(false)
    }
    const handleInputChange = (event) => {

        const {name, value} = event.target;
        setFormState((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
    }

    if (show) {
        return (
            <div style={{paddingTop: "1em"}}>
            <form id="usrform" onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Category Name</label>
                <div className="control" style={{paddingRight: "1em", paddingLeft: "0em", paddingBottom: "0.1em"}}>
                    <input 
                        className="input" 
                        type="text" 
                        name="name"
                        placeholder="Text input"
                        defaultValue={formState.name} 
                        onChange={handleInputChange}
                        maxLength={45}
                        required
                    />
                </div>
            </div>
            <div className="field is-grouped">
            <div className="control">
                <button className="button is-info ">Add</button>
            </div>
            <div className="control">
                <button onClick={handleShowBox} className="button is-info is-light">Cancel</button>
            </div>
            </div>
            </form>
            
            </div>
        )
    }
    else {
        return (
            <div onClick={handleShowBox} className={styles.additem}>
                <button onClick={handleShowBox} id="addbutton" className={styles.addbutton}><i className="fa-solid fa-plus"></i> Add Category</button>
            </div>
        )
    }
}

export default AddCategoryBox;