import Script from "next/script"
import React, { useEffect, useState } from "react"
import styles from '../styles/todos.module.css'
import NavBar from "@/components/navbar"
import Head from "next/head"
import Modal from "@/components/add_task_modal"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [addItemHover, setAddItemHover] = useState(false)
    const [showModal, setShowModal] = useState(false);

  

    useEffect(() => {
        setTodos(
            [
            {id: 1, description: "The todo task", category: null, done: 0},
            {id: 2, description: "The second todo task", category: null, done: 0},
            ]
        )
    }, [])

    function handleAddHover() {
        setAddItemHover(true)
    }

    function handleAddUnhover() {
        setAddItemHover(false)
    }

    function getColor(o) {
        if (addItemHover) {
            return "red";
        }
        return "black";
    }

    const handleOpenModal = () => {
        setShowModal(true);
        console.log(showModal);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
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
        <div onClick={handleOpenModal} style={{color: getColor(this)}} onMouseEnter={handleAddHover} onMouseLeave={handleAddUnhover} class={styles.additem}>
                <button onClick={handleOpenModal} style={{color: getColor(this)}} onMouseEnter={handleAddHover} onMouseLeave={handleAddUnhover} id="addbutton" class={styles.addbutton}><i class="fa-solid fa-plus"></i></button>
                Add task
                
        </div>
        <Modal
            title="My Modal"
            content={<p>This is contents</p>}
            isActive={showModal}
            onClose={handleCloseModal}
        />

        </div>
        </>
    )
}


export default Todo;

