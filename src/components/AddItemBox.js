import 'bulma/css/bulma.min.css';
import styles from '../styles/todos.module.css'
import { useState } from 'react';


function AddItemBox({setShow, show, handleShowBox, postTodoEntry}) {

    // form state based off of https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/
    const [formState, setFormState] = useState({
        description: "",
        category: "",
        user_id: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        postTodoEntry(formState)
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
                <label className="label">Task Description</label>
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="description"
                        placeholder="Text input"
                        defaultValue={formState.description} 
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="field">
            <label className="label">Category</label>
            <div className="control">
                <div className="select is-info">
                <select 
                    name="category" 
                    id="category" 
                    defaultValue={formState.category}
                    onChange={handleInputChange}
                    >
                    <option value="">Select Category</option>
                    <option value="1">Option1</option>
                </select>
                </div>
            </div>
            </div>
            <div className="field is-grouped">
            <div className="control">
                <button className="button is-info ">Submit</button>
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
                <button onClick={handleShowBox} id="addbutton" className={styles.addbutton}><i className="fa-solid fa-plus"></i> Add task</button>
            </div>
        )
    }
}

export default AddItemBox;