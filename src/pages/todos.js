import Script from "next/script"
import React, { useEffect, useState } from "react"
import styles from '../styles/todos.module.css'
import NavBar from "../components/navbar"
import AddItemBox from "../components/AddItemBox"
import 'bulma/css/bulma.min.css';
import { useAuth } from "@clerk/clerk-react"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [showItemBox, setShowItemBox] = useState(false)
    const {isLoaded, userId, sessionId, getToken} = useAuth();
    const [reloadTodos, setReloadTodos] = useState(false)

    async function postTodoEntry(data) {
        if (userId) { // logged in user
            // const test = JSON.stringify({
            //     name: "Somename",
            //     category: "Somecategory",
            //     description: "test"
            // });
            console.log(data)
            const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
            const token = await getToken({template: "codehooks"});
            const promise = await fetch(backend_base + "/todos",
            {
                'method': 'POST',
                'headers': {
                    'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
                    'Authorization': 'Bearer' + token,
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
            })
            const results = await promise;
            console.log(results)
        }
    }
  
    useEffect(() => {
        async function getTodos() {
            if (userId) { // logged in user
                const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
                const token = await getToken({template: "codehooks"});
                const promise = await fetch(backend_base + "/todos",
                {
                    'method': 'GET',
                    'headers': {
                        'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
                        'Authorization': 'Bearer' + token
                    }
                })
                const results = await promise.json()
                // use result
                console.log("grabbed: " + results);
                setTodos(results);
            }
        }
        getTodos()
        console.log(todos)


        // setTodos(
        //     [
        //     {id: 1, description: "The todo task", category: null, done: 0},
        //     {id: 2, description: "The second todo task is going to be super long i wonder what will happen i really am not super sure but i want to find out", category: null, done: 0},
        //     ]
        // )
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
                        postTodoEntry={postTodoEntry}
                        setReloadTodos={setReloadTodos}
                    />
                </div>
            </div>
    
        </div>
        </>
    )
}


export default Todo;

