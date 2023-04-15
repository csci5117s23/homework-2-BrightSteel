import { SignedOut } from "@clerk/clerk-react";
import { RedirectNonLoggedIn} from ".";
import DonePage from "../components/DonePage";
import Redirect from "./redirect";

const Done = () => {
    
    return (
        <>
        <RedirectNonLoggedIn></RedirectNonLoggedIn>
        
        <DonePage
            category=""
        />
        </>
    )
}

export default Done;