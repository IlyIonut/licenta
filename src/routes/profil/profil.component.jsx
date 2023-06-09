import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import SideBar from '../../components/side-profile/side-profile.component.jsx';
import { SideProfile, ProfileContainer, ContinutContainer } from './profil.styled.jsx';
import Profileview from '../../components/profileview/profileview.component';

const Profil = () => {
    const {currentUser} = useContext(UserContext);
    //const {email} = currentUser;
    return(
        <div>
            {
                currentUser ? (
                    <ProfileContainer>
                        <SideProfile> <SideBar/> </SideProfile>
                        <ContinutContainer>
                            <Profileview/>
                        </ContinutContainer>

                    </ProfileContainer>
                ) : (
                    <h2>This is the profil</h2>
                )
            }
            
            
        </div>
    )
}

export default Profil;