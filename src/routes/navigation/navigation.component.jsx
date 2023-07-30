import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { useContext} from "react";
import { ReactComponent as UTCN } from "../../assets/UTCN.svg";
import { ReactComponent as LogoSas } from "../../assets/logoSas.svg"
import {NavTotal,  NavLink , NavLinksContainer , LogoContainer} from "./navigation.styles";

import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () =>{

    const {currentUser} = useContext(UserContext);

    return(
        <NavTotal>
            
            <div className='flex items-center justify-between w-5/6 overflow-hidden bg-white dark:bg-dark-500 lg: rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
                <LogoContainer to='/'>
                   <LogoSas className='w-24 h-12'  />
                   <UTCN className='w-24 h-12 mx-2'  />
                </LogoContainer>
                
                <NavLinksContainer>
                    <NavLink to='/about' >
                            <span>About SAS</span>
                    </NavLink>
                    <NavLink to='/events' >
                            <span>Events</span>
                    </NavLink>
                    <NavLink to='/users' >
                            <span>Find your partner</span>
                    </NavLink>
                    {/* <NavLink to='/shop' >
                            SHOP
                    </NavLink> */}
                    <NavLink to='/myprofil' >
                        <span>Profile</span>
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