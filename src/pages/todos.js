import Script from "next/script"
import React, { useEffect, useState } from "react"
import styles from '../styles/todos.module.css'
import NavBar from "../components/navbar"
import AddItemBox from "../components/AddItemBox"
import 'bulma/css/bulma.min.css';

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [showItemBox, setShowItemBox] = useState(false)
  
    useEffect(() => {
        setTodos(
            [
            {id: 1, description: "The todo task", category: null, done: 0},
            {id: 2, description: "The second todo task is going to be super long i wonder what will happen i really am not super sure but i want to find out", category: null, done: 0},
            ]
        )
    }, [])

    const handleShowBox = () => {
        setShowItemBox(!showItemBox);
      };

    return (
        <>
        <Script src="https://kit.fontawesome.com/31f1566f16.js" crossorigin="anonymous"></Script>
        <NavBar></NavBar>
        <div className={styles.body}>
            <div className="columns is-centered">
                <div className="column is-half">
                    <div id="heading">
                        <h1 style={{fontWeight: "bold"}}>To-Do List</h1>
                        </div>
                        {todos.map(function(object, i){
                            return (
                            <div key={i} className={styles.todoitem}>
                                <button className={styles.simple}></button>
                                {object.description}
                            </div>
                            )     
                        })}

                    <AddItemBox
                        show={showItemBox}
                        handleShowBox={handleShowBox}
                    />
                </div>
            </div>
    
        </div>
        </>
    )
}


export default Todo;

