import Script from "next/script";
import NavBar from "../components/navbar"
import styles from '../styles/todos.module.css'
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

const Done = () => {

    const [todos, setTodos] = useState([])
    const {isLoaded, userId, sessionId, getToken} = useAuth();

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
            // results.map(v => console.log(v))
            var notDone = results.filter(v => v.done === "true")
            setTodos(notDone.reverse());
        }
    }
  
    useEffect(() => {
    
        getTodos()
        
    }, [userId])

    return (
        <>
        <Script src="https://kit.fontawesome.com/31f1566f16.js" crossorigin="anonymous"></Script>
        <NavBar></NavBar>
        <div className={styles.body}>
            <div className="columns is-centered">
                <div className="column is-half">
                    <div id="heading">
                        <h1 style={{fontWeight: "bold"}}>Completed List</h1>
                        </div>
                        {todos.map(function(object, i){
                            return (
                            <div key={i} className={styles.todoitem}>
                                <button className={styles.simple + " " + styles.completed}></button>
                                <a onClick={() => router.push('/todo/' + object._id)} style={{textDecoration: "line-through"}}>{object.description}</a>
                            </div>
                            )
                         
                        })}
                </div>
            </div>
    
        </div>
        </>
    )
}

export default Done;