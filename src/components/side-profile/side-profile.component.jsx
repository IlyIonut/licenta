import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import { useState, useContext , useEffect} from 'react'
import { UserContext } from '../../context/user.context'
import "./side-profile.styles.scss"
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
      faculty:'',

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
  
    const { profileImage, displayName, mainOccupation ,  gitHubLink, linkedinLink, instagramLink,faculty} = profileData;
    
    return(
      <div className='sideProfile'
      style={{ backgroundImage: `url(${profileImage})`}}>
            
            <h5 className='inline-block font-medium tracking-wider text-3x1 font-kaushan'>{displayName}</h5>
            <p className='px-2 py-1 rounded-full bg-dark-200 dark:bg-dark-200'>{mainOccupation}</p>
            <div className='dataContainer'>
              <div className='contact'>
                  <a href={gitHubLink} target="_blank" rel="noreferrer"><AiFillGithub className='w-8 h-8 rounded-full cursor-pointer lg:w-8 lg:h-8 bg-amber-600 ' aria-label='Github'/></a>
                  <a href={linkedinLink} target="_blank" rel="noreferrer"><AiFillLinkedin className='w-8 h-8 rounded-full cursor-pointer lg:w-8 lg:h-8 bg-amber-600 ' aria-label='Linkedin'/></a>
                  <a href={instagramLink} target="_blank" rel="noreferrer"><AiFillInstagram className='w-8 h-8 rounded-full cursor-pointer lg:w-8 lg:h-8 bg-amber-600 ' aria-label='Instagram' /></a>
              </div>
              <h3>{faculty}</h3>
            </div>
      </div>
    )
}

export default Sidebar;