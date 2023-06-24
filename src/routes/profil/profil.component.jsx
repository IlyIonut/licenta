import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import SideBar from '../../components/side-profile/side-profile.component.jsx';
import { AuthContainer } from './profil.styled.jsx';
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

      return(     <div className='flex items-start w-5/6 gap-8 lg: my-14 sm: md:' >
      {
          
          currentUser ? (
              <>
                  <div className='w-1/3 h-auto'>
                  <SideBar key={currentUser.uid} user={currentUser} />
                  </div>
                  <div className='flex flex-wrap w-5/6 col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
                      <Profileview/>
                  </div>
              </>
          ) : (
                <AuthContainer>
                  <SignInForm />
                  <SignUpForm />
                </AuthContainer>
          )
          
      }
  </div>
  
  )
    
    //   if (!currentUser) {
    //     return (
    //       <AuthContainer>
    //         <SignInForm />
    //         <SignUpForm />
    //       </AuthContainer>
    //     );
    //   }
    
    //   return (
    //     <div className="flex items-start w-5/6 gap-8 lg:my-14 sm:md:">
    //       <div className="w-1/3 h-auto">
    //         <SideBar key={currentUser.uid} user={currentUser} />
    //       </div>
    //       <div className="flex flex-wrap w-5/6 col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
    //         <Profileview />
    //       </div>
    //     </div>
    //   );
    };


export default Profil;