import { Outlet ,Link} from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { Fragment, useContext} from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { NavigationContainer , NavLink , NavLinksContainer , LogoContainer} from "./navigation.styles";
//import './navigation.styles.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cart.context";

const Navigation = () =>{

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                   <CrwnLogo className="logo" />
                </LogoContainer>
                
                <NavLinksContainer>
                    <NavLink to='/shop' >
                            SHOP
                    </NavLink>
                    <NavLink to='/profil' >
                        Profil
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser} >SIGN OUT</NavLink>)
                            :
                            (<NavLink to='/auth' >SIGN IN</NavLink>)
                    }
                    <CartIcon/>
                </NavLinksContainer>
                 { isCartOpen && <CartDropdown/>} 
            {/* daca ambele valori sunt adevarate atunci se va returna ultimul element ex cartdropdown */}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation