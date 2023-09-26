import { Outlet } from "react-router-dom";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './createAccount.styles.scss'

const CreateAccount = () => {

    return (
        <div className="acc-container">
            <SignUpForm/>
            <Outlet/>
        </div>
    );
}

export default CreateAccount;