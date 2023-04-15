import Script from "next/script"
import React, { useEffect, useState } from "react"
import styles from '../styles/todos.module.css'
import NavBar from "../components/navbar"
import AddItemBox from "../components/AddItemBox"
import 'bulma/css/bulma.min.css';
import { useAuth } from "@clerk/clerk-react"
import AddCategoryBox from "./AddCategoryBox"
import { useRouter } from "next/router"
import SideBar from "./SideBar"

const TodoPage = ({category}) => {
    const [todos, setTodos] = useState([])
    const [showItemBox, setShowItemBox] = useState(false)
    const {isLoaded, userId, sessionId, getToken} = useAuth();
    const [reloadTodos, setReloadTodos] = useState(false)

    const [categories, setCategories] = useState([])

    const router = useRouter();

    async function postTodoEntry(data) {
        if (userId) { // logged in user
            // console.log(data)
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
            // console.log(results)

            setReloadTodos(!reloadTodos)
            formState.description = ""
        }
    }

    

    async function markDone(object) {
        object.done = "true"
        if (userId) { // logged in user
            const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
            const token = await getToken({template: "codehooks"});
            const promise = await fetch(backend_base + "/done/" + object._id,
            {
                'method': 'POST',
                'headers': {
                    'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
                    'Authorization': 'Bearer' + token,
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(object)
            })
            const result = await promise.json()
            setReloadTodos(!reloadTodos)
        }
    }

    
    async function getCategories() {
        if (userId) {
            const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
            const token = await getToken({template: "codehooks"});
            const promise = await fetch(backend_base + "/categories",
            {
                'method': 'GET',
                'headers': {
                    'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
                    'Authorization': 'Bearer' + token,
                }
            })
            const results = await promise.json()
            setCategories(results)
        }
    }

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
            var notDone = results.filter(v => v.done !== "true")
            if (category !== "") {
                notDone = notDone.filter(v => v.category === category)
            }
            setTodos(notDone.reverse());
            getCategories()
        }
    }
  
    useEffect(() => {

        getTodos()
        // console.log(todos)

        
    }, [userId, reloadTodos, router.query])

    const handleShowBox = () => {
        setShowItemBox(!showItemBox);
      };

    function handleMarkDone(event, object) {
        markDone(object)
    }

    function getTodoTitle() {
        if (category === "") {
            return "To-Do List"
        }
        else {
            return category
        }
    }

    const [formState, setFormState] = useState({
        description: "",
        category: category,
        user_id: ""
    })

    return (
        <>
        <Script src="https://kit.fontawesome.com/31f1566f16.js" crossorigin="anonymous"></Script>
        <NavBar></NavBar>
        <div className={styles.body}>
            <div className="columns">
               <SideBar
                    categories={categories}
                    done={false}
                    setReloadTodos={setReloadTodos}
                    reloadTodos={reloadTodos}
               />
                <div className="column">
                    <div id="heading">
                        <h1 style={{fontWeight: "bold"}}>{getTodoTitle()}</h1>
                        </div>
                        {todos.map(function(object, i){
                            
                            return (
                            <div key={i} className={styles.todoitem}>
                                <button onClick={(event) => handleMarkDone(event, object)} className={styles.simple}></button>
                                <a onClick={() => router.push('/todo/' + object._id)} >{object.description}</a>
                            </div>
                            )
                         
                        })}

                    <AddItemBox
                        show={showItemBox}
                        setShow={setShowItemBox}
                        handleShowBox={handleShowBox}
                        postTodoEntry={postTodoEntry}
                        category={category}
                        categories={categories}
                        setFormState={setFormState}
                        formState={formState}
                    />

                    {/* {categories.map(function (object) {
                        return (
                            <h1>{object.category}</h1>
                        )
                    })} */}
                </div>
                <div className="column is-one-quarter">

                </div>
            </div>
        </div>
        </>
    )
}


export default TodoPage;