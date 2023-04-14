import { useRouter } from "next/router"
import NavBar from "../../components/navbar";
import 'bulma/css/bulma.min.css'
import styles from '../../styles/todos.module.css'
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

const Todo = () => {
    const {isLoaded, userId, sessionId, getToken} = useAuth();
    const [todo, setTodo] = useState({})
    const [done, setDone] = useState()

    const router = useRouter();
    const {id} = router.query

    useEffect(() => {
        console.log("test")
        getTodo()

    }, [userId])

    async function editTodo() {
        todo.done = done;
        if (userId) { // logged in user
            const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
            const token = await getToken({template: "codehooks"});
            const promise = await fetch(backend_base + "/done/" + id,
            {
                'method': 'POST',
                'headers': {
                    'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
                    'Authorization': 'Bearer' + token,
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(todo)
            })
            const result = await promise.json()
            router.push('/todos')
        }
    }

    function saveButton() {
        if (Object.keys(todo).length > 0) {
            editTodo()
        }
    }

    function cancelButton() {
        router.push('/todos')
    }

    function toggleDone() {
        if (done !== undefined) {
            if (done === "false") {
                setDone("true")
            }
            else {
                setDone("false")
            }
        }
    }

    const DoneButton = () => {
        if (done === undefined || done === "false") {
            return <button onClick={toggleDone} className={styles.simple2 + " " + styles.editmarkdone}></button>
        }
        else {
            return <button onClick={toggleDone} className={styles.simple2 + " " + styles.completed + " " + styles.editmarkdone}></button>
        }
    }

    async function getTodo() {
        if (userId) { // logged in user
            const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
            const token = await getToken({template: "codehooks"});
            const promise = await fetch(backend_base + "/todo/" + id,
            {
                'method': 'GET',
                'headers': {
                    'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
                    'Authorization': 'Bearer' + token,
                }
            })
            const result = await promise.json()
            console.log(result)
            setTodo(result)
            
            if (result.done === "true") {
                setDone("true")
            }
            else {
                setDone("false")
            }
        }
    }

    function setDescription(e) {
        todo.description = e.target.value;
    }

    const TextBox = () => {
        if (todo.description === undefined) {
            return <textarea className="textarea" rows={2} onChange={setDescription}></textarea>
        }
        else {
            return <textarea className="textarea" rows={2} defaultValue={todo.description} onChange={setDescription}></textarea>
        }
    }

    return (
        <>
        <NavBar></NavBar>
        <div className={styles.body}>
            <div className="columns is-centered">
                <div className="column is-half">
                    <div id="heading">
                        <h1 style={{fontWeight: "bold"}}>Edit To-Do</h1>
                        <div style={{display: "flex", alignItems: "center", paddingTop: "0.3em"}}> 
                        <DoneButton></DoneButton>
                        <TextBox></TextBox>
                        </div>
                        <div style={{paddingTop: "2.3em"}} className="field is-grouped columns is-centered">
                            <div className="control">
                                <button onClick={saveButton} className="button is-info ">Save</button>
                            </div>
                            <div className="control">
                                <button onClick={cancelButton} className="button is-info is-light">Cancel</button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo;