import { useRouter } from "next/router";
import DonePage from "../../components/DonePage";
import { RedirectNonLoggedIn, redirectNonLoggedIn } from "..";

const Done = () => {


    const router = useRouter();
    const {category} = router.query

    return (
        <>
        <RedirectNonLoggedIn></RedirectNonLoggedIn>
        <DonePage
            category={category}
        />
        </>
        
    )
}

export default Done;