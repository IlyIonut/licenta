import { Outlet } from "react-router-dom";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentification.styles.scss'

const Authentification = () => {

    return (
        <div className="authentification-container">
            <SignInForm/>
            <SignUpForm/>
            <Outlet/>
        </div>
    );
}

export default Authentification;