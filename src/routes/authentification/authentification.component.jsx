import { Outlet } from "react-router-dom";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentification.styles.scss'

const Authentification = () => {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchData();
    // }, []); exemplu de sign in with redirect


    return (
        <div className="authentification-container">
            <SignInForm/>
            <SignUpForm/>
            <Outlet/>
        </div>
    );
}

export default Authentification;