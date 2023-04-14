import { useRouter } from "next/router";
import TodoPage from "../../components/TodoPage";

const Category = () => {

    const router = useRouter();
    const {category} = router.query

    return (
        <TodoPage
            category={category}
        />
    )
}

export default Category;