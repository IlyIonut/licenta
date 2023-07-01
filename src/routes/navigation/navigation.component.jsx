import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { useContext} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {NavTotal,  NavLink , NavLinksContainer , LogoContainer} from "./navigation.styles";

import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () =>{

    const {currentUser} = useContext(UserContext);

    return(
        <NavTotal>
            <div className='flex items-center justify-between w-5/6 overflow-hidden bg-white dark:bg-dark-500 lg: rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
                <LogoContainer to='/'>
                   <CrwnLogo className="logo" />
                </LogoContainer>
                
                <NavLinksContainer>
                    <NavLink to='/users' >
                            Users
                    </NavLink>
                    {/* <NavLink to='/shop' >
                            SHOP
                    </NavLink> */}
                    <NavLink to='/myprofil' >
                        Profile
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser} >SIGN OUT</NavLink>)
                            :
                            (<NavLink to='/auth' >SIGN IN</NavLink>)
                    }
                    {/* <CartIcon/> */}
                </NavLinksContainer>
                 {/* { isCartOpen && <CartDropdown/>}  */}
            {/* daca ambele valori sunt adevarate atunci se va returna ultimul element ex cartdropdown */}
            </div>
            <Outlet/>
        </NavTotal>
    );
}

export default Navigation