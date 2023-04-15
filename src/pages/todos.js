import { RedirectNonLoggedIn, redirectNonLoggedIn } from ".";
import TodoPage from "../components/TodoPage"

const Todo = () => {

    return (
        <>
        <RedirectNonLoggedIn></RedirectNonLoggedIn>
        <TodoPage
            category=""
        />
        </>
    )
}

export default Todo;