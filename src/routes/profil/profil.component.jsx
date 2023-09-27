import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import SideBar from '../../components/side-profile/side-profile.component.jsx';
import './profil.styles.scss';
import Profileview from '../../components/profileview/profileview.component';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const Profil = () => {
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
          navigate('/auth'); // Replace '/auth' with the actual route for your authentication page
        }
      }, [currentUser, navigate]);

      return(     
        <div className='profilContainer' >
          <div className='sideBar'>
            <SideBar key={currentUser.uid} user={currentUser} />
          </div>
          <div className='profileView'>
            <Profileview/>
          </div>
            
        </div>
      )
    };


export default Profil;