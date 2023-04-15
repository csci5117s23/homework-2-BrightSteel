import 'bulma/css/bulma.min.css';
import styles from '../styles/todos.module.css'
import { useState } from 'react';


const AddItemBox = ({setShow, show, handleShowBox, postTodoEntry, category, categories}) =>{

    // form state based off of https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/
    const [formState, setFormState] = useState({
        description: "",
        category: category,
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

    if (categories[0] !== undefined && show) {
        console.log(categories)
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
                    defaultValue={category}
                    onChange={handleInputChange}
                    >
                        <option value="">Select Category</option>
                        
                        {categories.map(function(object, i) {
                            return (
                            <option key={i} value={object.category}>{object.category}</option>
                            )
                        })}
                    
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