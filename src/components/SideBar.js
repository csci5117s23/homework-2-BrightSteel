import Script from "next/script"
import React, { useEffect, useState } from "react"
import styles from '../styles/todos.module.css'
import NavBar from "../components/navbar"
import AddItemBox from "../components/AddItemBox"
import 'bulma/css/bulma.min.css';
import { useAuth } from "@clerk/clerk-react"
import AddCategoryBox from "./AddCategoryBox"
import { useRouter } from "next/router"

const SideBar = ({categories, done, setReloadTodos, reloadTodos}) => {

    const [buttonStates, setButtonStates] = useState(
        []
    )

    const {isLoaded, userId, sessionId, getToken} = useAuth();


    const router = useRouter();


    function reload() {
        setReloadTodos(!reloadTodos)
    }

    async function deleteCategory(id) {
        if (userId) {
            const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
            const token = await getToken({template: "codehooks"});
            const promise = await fetch(backend_base + "/deletecategory",
            {
                'method': 'POST',
                'headers': {
                    'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
                    'Authorization': 'Bearer' + token,
                    'Content-Type': 'application/json'
                },
                 'body': JSON.stringify({
                     "_id": id
                })
            })
            // console.log(id)
            await promise
            reload()
            // console.log(results + "RESSS")
        }
    }


    async function createCategory(name) {
        if (userId && categories) {
            if (categories[0] !== undefined && categories.some(i => i.category === name)) {
                // category already exists
            }
            else {
                const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
                const token = await getToken({template: "codehooks"});
                const promise = await fetch(backend_base + "/category",
                {
                    'method': 'POST',
                    'headers': {
                        'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'application/json'
                    },
                    'body': JSON.stringify({
                        "category": name
                    })
                })
                const results = await promise.json()
                // console.log("results")
                // console.log(results)
                reload()
            }
        }
    }

    function editHover(i) {
        setButtonStates((prevProps) => ({
            ...prevProps,
            [i]: true
        }))
    }

    function editRemoveHover(i) {
        setButtonStates((prevProps) => ({
            ...prevProps,
            [i]: false
        }))

    }

    const EditButton = ({i}) => {
        if (buttonStates[i] === true) {
            return <button onClick={() => deleteCategory(categories[i]._id)} id="editbutton" className={styles.editbutton}><i className="fa-regular fa-trash"></i></button>
        }
        else {
            return <div></div>;
        }
    }

    function getLink() {
        if (done) {
            return "/done/"
        }
        else {
            return "/todos/"
        }
    }

    function getAllLink() {
        if (done) {
            return "/done"
        }
        else {
            return "/todos"
        }
    }

    return (
        <div className="column is-one-quarter">
        <aside className="menu" style={{paddingLeft: "0.4em"}}>
            <p className="menu-label">
                Categories
            </p>
            <ul className="menu-list">
            <li><a onClick={() => router.push(getAllLink())}>All To-Dos</a></li>

                {categories.map(function(object,i ){
                    return (
                        <li key={i} onMouseEnter={() => editHover(i)} onMouseLeave={() => editRemoveHover(i)} className="is-flex"><a onClick={() => router.push(getLink() + object.category)}>{object.category}</a>
                        <EditButton
                            
                            i={i}
                        />
                        </li>
                    )
                })}
            </ul>
            <AddCategoryBox
            createCategory={createCategory} 
            />
        </aside>
        
        </div>
    )
}

export default SideBar;