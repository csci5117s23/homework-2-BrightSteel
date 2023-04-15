import { useRouter } from "next/router";
import DonePage from "../../components/DonePage";

const Done = () => {

    const router = useRouter();
    const {category} = router.query

    return (
        <DonePage
            category={category}
        />
    )
}

export default Done;