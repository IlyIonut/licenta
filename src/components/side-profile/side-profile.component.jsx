import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import { useState, useContext , useEffect} from 'react'
import { UserContext } from '../../context/user.context'
import {  SideProfile, Button,  } from './side-profile.styled'
import { getUserData } from '../../utils/firebase/firebase.utils'
import { Link } from 'react-router-dom'

const Sidebar = () => {


    const { currentUser } = useContext(UserContext);
    const [profileData, setProfileData] = useState({
      profileImage: '',
      displayName: '',
      email: '',
      mainOcupation: '',
      description:'',
      phoneNumber: '',
      gitHubLink:'',
      linkedinLink:'',
      instagramLink:'',
      resume:'',
      location:'',

    });
  
    useEffect(() => {
      const getUserProfile = async () => {
        try {
          if (currentUser && currentUser.uid) {
          const fetchedProfileData = await getUserData(currentUser);
          setProfileData(fetchedProfileData);
          }
        } catch (error) {
          console.log('Error retrieving user profile:', error);
        }
      };
  
      getUserProfile();
    }, [currentUser, profileData]);
  
    const { profileImage, displayName, mainOccupation ,  gitHubLink, linkedinLink, instagramLink} = profileData;
    
    return(
      <SideProfile
      style={{ backgroundImage: `url(${profileImage})`}}>
            
            <div className='flex-column justify-around items-end content-end w-1/3 mx-auto text-white align-bottom md:w-full'>
                <a href={gitHubLink} target="_blank" rel="noreferrer"><AiFillGithub className='w-10 h-10 bg-amber-600 rounded-full cursor-pointer' aria-label='Github'/></a>
                <a href={linkedinLink} target="_blank" rel="noreferrer"><AiFillLinkedin className='w-10 h-10 bg-amber-600 rounded-full cursor-pointer' aria-label='Linkedin'/></a>
                <a href={instagramLink} target="_blank" rel="noreferrer"><AiFillInstagram className='w-10 h-10 bg-amber-600 rounded-full cursor-pointer' aria-label='Instagram' /></a>
            </div>
            <h5 className='inline-block font-medium tracking-wider text-3x1 font-kaushan'>{displayName}</h5>
            <p className='px-2 py-1 rounded-full bg-dark-200 dark:bg-dark-200'>{mainOccupation}</p>
              <Link to={`/users/profil/${displayName}`}>
                  <Button>
                  <span>View Profile</span>
                  </Button>
              </Link>
        </SideProfile>
    )
}

export default Sidebar;