import Script from "next/script"
import React, { useEffect, useState } from "react"
import styles from '../styles/todos.module.css'

const Todo = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos(
            [
            {id: 1, description: "The todo task", category: null, done: 0},
            {id: 2, description: "The second todo task", category: null, done: 0},
            ]
        )
    }, [])

    return (
        <>
        <div id="heading">
            <h1>To-Do List</h1>
        </div>
        {todos.map(function(object, i){
            return (
            <div>
                <button class={styles.simple}></button>
                {object.description}
            </div>
            )     
        })}
           
        </>
    )
}


export default Todo;

