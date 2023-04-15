import { useRouter } from "next/router";
import TodoPage from "../../components/TodoPage";
import { RedirectNonLoggedIn, redirectNonLoggedIn } from "..";

const Category = () => {
    
    const router = useRouter();
    const {category} = router.query

    return (
        <>
        <RedirectNonLoggedIn></RedirectNonLoggedIn>
        <TodoPage
            category={category}
        />
        </>
        
    )
}

export default Category;