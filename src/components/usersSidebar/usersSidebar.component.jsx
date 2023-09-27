import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useState, useContext , useEffect} from 'react'
import { UserContext } from '../../context/user.context'
import { getUserData } from '../../utils/firebase/firebase.utils'
import {useTheme} from 'next-themes'
import "./usersSidebar.styles.scss";
import { Link } from 'react-router-dom'
import UserProfil from '../../routes/userprofil/userprofil.component'
//import Image from 'next/legacy/image'

const UsersSidebar = ({user}) => {

    const {theme ,setTheme} = useTheme();

    const changeTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    //const { currentUser } = useContext(UserContext);
    const [profileData, setProfileData] = useState({
      uid:'',
      profileImage: '',
      displayName: '',
      email: '',
      mainOccupation: '',
      phoneNumber: '',
      gitHubLink:'',
      linkedinLink:'',
      instagramLink:'',
      faculty:'',

    });
  
    useEffect(() => {
      const getUserProfile = async () => {
        try {
          const fetchedProfileData = await getUserData(user);
          setProfileData(fetchedProfileData);
        } catch (error) {
          console.log('Error retrieving user profile:', error);
        }
      };
  
      getUserProfile();
    }, [user, profileData]);

    const [isProfileOpen, setProfileOpen] = useState(false);

    const handleProfileClick = () => {
      setProfileOpen(true);
    };
  
    const {
      uid,
      profileImage,
      displayName,
      email,
      mainOccupation,
      phoneNumber,
      gitHubLink,
      linkedinLink,
      instagramLink,
      faculty,
    } = user;

    const userId = user.id || user.uid;

    return(
      <div className='sideProfile'
      style={{ backgroundImage: `url(${profileImage})`}}>
            
            <h5 className='inline-block font-medium tracking-wider text-3x1 font-kaushan'>{displayName}</h5>
            <p className='px-2 py-1 rounded-full bg-dark-200 dark:bg-dark-200'>{mainOccupation}</p>
            <div className='dataContainer'>
              <div className='contact'>
                  <a href={gitHubLink} target="_blank" rel="noreferrer"><AiFillGithub className='rounded-full cursor-pointer lg:w-8 lg:h-8 bg-amber-600 sm:w-4 sm:h-4' aria-label='Github'/></a>
                  <a href={linkedinLink} target="_blank" rel="noreferrer"><AiFillLinkedin className='rounded-full cursor-pointer lg:w-8 lg:h-8 bg-amber-600 sm:w-4 sm:h-4' aria-label='Linkedin'/></a>
                  <a href={instagramLink} target="_blank" rel="noreferrer"><AiFillInstagram className='rounded-full cursor-pointer lg:w-8 lg:h-8 bg-amber-600 sm:w-4 sm:h-4' aria-label='Instagram' /></a>
              </div>
              <h3>{faculty}</h3>
            </div>
      </div>
    )
  }

export default UsersSidebar;