import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useState, useContext , useEffect} from 'react'
import { UserContext } from '../../context/user.context'
import { Date, SideProfile, Links, Button } from './side-profile.styled'
import { getUserData } from '../../utils/firebase/firebase.utils'

const Sidebar = () => {

    const { currentUser } = useContext(UserContext);
    const [profileData, setProfileData] = useState({
      profileImage: '',
      displayName: '',
      email: '',
      mainOcupation: '',
      phoneNumber: '',
      gitHubLink:'',
      linkedinLink:'',
      instagramLink:'',
      resume:'',

    });
  
    useEffect(() => {
      const getUserProfile = async () => {
        try {
          const fetchedProfileData = await getUserData(currentUser);
          setProfileData(fetchedProfileData);
        } catch (error) {
          console.log('Error retrieving user profile:', error);
        }
      };
  
      getUserProfile();
    }, [currentUser, profileData]);
  
    const { profileImage, displayName, email, mainOcupation , phoneNumber, gitHubLink, linkedinLink, instagramLink, resume} = profileData;
    
    return(
        <SideProfile>
            <img src={profileImage}
            alt={`${displayName}`}
            height="128"
            width="128"
            layout= "intrinsic"
            quality="100"
            />
            <h3 className='my-4 font-medium tracking-wider text-3x1 font-kaushan'>{displayName}</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>{mainOcupation}</p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' 
            href={resume} download={`${displayName}.pdf`} target="_blank" rel="noreferrer"><GiTie className='w-6 h-6' />Download Resume</a>
            <Links>
                <a href={gitHubLink} target="_blank" rel="noreferrer"><AiFillGithub className='w-8 h-8 cursor-pointer' aria-label='Github'/></a>
                <a href={linkedinLink} target="_blank" rel="noreferrer"><AiFillLinkedin className='w-8 h-8 cursor-pointer' aria-label='Linkedin'/></a>
                <a href={instagramLink} target="_blank" rel="noreferrer"><AiFillInstagram className='w-8 h-8 cursor-pointer' aria-label='Instagram' /></a>
            </Links>
            <Date style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className='flex justify-center space-x-2 idems-center'>
                    <GoLocation/>
                    <span>Cluj, Romania</span>
                </div>
                <p className='my-2'>{email}</p>
                <p className='my-2'>{phoneNumber}</p>
            </Date>
            <Button
            onClick={() => window.open(`mailto:{${email}}`)} >
            Email Me
            </Button>
        </SideProfile>
    )
}

export default Sidebar;