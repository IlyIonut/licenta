import { Outlet ,Link} from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { Fragment, useContext} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () =>{

    const {currentUser} = useContext(UserContext);

    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                   <CrwnLogo className="logo" />
                </Link>
                
                <div className="nav-links-container">
                    <Link className="nav-link" to='/partners'>
                            Partners
                    </Link>
                    <Link className="nav-link" to='/profil'>
                            Profil
                    </Link>
                    <Link className="nav-link" to='/support'>
                            Support
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser} >SIGN OUT</span>)
                            :
                            (<Link className="nav-link" to='/auth'>SIGN IN</Link>)
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation