import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import SideBar from '../../components/side-profile/side-profile.component.jsx';
import { SideProfile, ProfileContainer, ContinutContainer, Profilul } from './profil.styled.jsx';
import Profileview from '../../components/profileview/profileview.component';

const Profil = () => {
    const {currentUser} = useContext(UserContext);
    //const {email} = currentUser;
    return(
        <div className='flex items-start w-5/6 gap-8 lg: my-14 sm: md:' >
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
                    <h2>This is the profil</h2>
                )
                
            }
        </div>
        )
}

export default Profil;