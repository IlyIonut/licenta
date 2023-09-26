import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { useContext} from "react";
import { useState,useEffect } from "react";
import { ReactComponent as UTCN } from "../../assets/UTCN.svg";
import { ReactComponent as LogoSas } from "../../assets/logoSas.svg"
import "./navigation.styles.scss";

import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () =>{

    const {currentUser} = useContext(UserContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen((prevState) => !prevState);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };

    return(
        <div className="NavTotal">
            <div className="NavBar">

            <div className="NavLinksContainer">
                    <Link className="LogoContainer" to='/'>
                    <LogoSas className='w-32 h-auto mx-6'  />
                    <UTCN className='w-32 h-auto'  />
                    </Link>
                
                    <Link className="NavLink" to='/about' >
                            <span>About SAS</span>
                    </Link>
                    <Link className="NavLink" to='/events' >
                            <span>Events</span>
                    </Link>
                    <Link className="NavLink" to='/contactus' >
                            <span>Contact Us</span>
                    </Link>
                    {
                        currentUser ? (
                            <Link className="NavLink" to='/myprofil' >
                            <span>Profile</span>
                            </Link>
                        ) : null
                    }
                    
                    {
                        currentUser ? (
                            <Link className="NavLink" as='span' onClick={signOutUser} ><span>SIGN OUT</span></Link>)
                            :
                            (<Link className="NavLink" to='/auth' ><span>SIGN IN</span></Link>)
                    }
                    {/* <CartIcon/> */}
                    
                </div>
                    
              <div className="MobileMenu" >
                    <Link className="LogoContainer" to='/'>
                      <LogoSas className='w-12 h-auto mx-5'  />
                      <UTCN className='w-12 h-auto'  />
                    </Link>
              <div className={`MobileNav ${menuOpen ? 'active' : ''}`}>
                <Link className="NavLink" to='/about' >
                            <span>About SAS</span>
                    </Link>
                    <Link className="NavLink" to='/events' >
                            <span>Events</span>
                    </Link>
                    <Link className="NavLink" to='/contactus' >
                            <span>Contact Us</span>
                    </Link>
                    {
                        currentUser ? (
                            <Link className="NavLink" to='/myprofil' >
                            <span>Profile</span>
                            </Link>
                        ) : null
                    }
                    
                    {
                        currentUser ? (
                            <Link className="NavLink" as='span' onClick={signOutUser} ><span>SIGN OUT</span></Link>)
                            :
                            (<Link className="NavLink" to='/auth' ><span>SIGN IN</span></Link>)
                    }
                  </div>
                </div>
                    
                  <div
                      onClick={toggleMenu}
                      className={`Hamburger ${menuOpen ? 'active' : ''}`}
                    >
                      <span className='Bar'></span>
                      <span className='Bar'></span>
                      <span className='Bar'></span>
                    </div>
                 {/* { isCartOpen && <CartDropdown/>}  */}
            {/* daca ambele valori sunt adevarate atunci se va returna ultimul element ex cartdropdown */}
            </div>
            <Outlet/>
        </div>
    );
}

export default Navigation