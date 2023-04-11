import Script from "next/script"
import React, { useEffect, useState } from "react"
import styles from '../styles/todos.module.css'
import NavBar from "@/components/navbar"
import Head from "next/head"
import Modal from "@/components/add_task_modal"
import AddItemBox from "@/components/AddItemBox"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [showItemBox, setShowItemBox] = useState(false)
  

    useEffect(() => {
        setTodos(
            [
            {id: 1, description: "The todo task", category: null, done: 0},
            {id: 2, description: "The second todo task", category: null, done: 0},
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
        <div class={styles.body}>
        <div id="heading">
            <h1 style={{fontWeight: "bold"}}>To-Do List</h1>
        </div>
        {todos.map(function(object, i){
            return (
            <div class={styles.todoitem}>
                <button class={styles.simple}></button>
                {object.description}
            </div>
            )     
        })}
    
        <AddItemBox
            show={showItemBox}
            handleShowBox={handleShowBox}
        />
        </div>
        </>
    )
}


export default Todo;

