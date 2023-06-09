import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useState, useContext , useEffect} from 'react'
import { UserContext } from '../../context/user.context'
import { Date, SideProfile, Links } from './side-profile.styled'
import { getUserData } from '../../utils/firebase/firebase.utils'

const Sidebar = () => {

    const { currentUser } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profileData = await getUserData(currentUser);
        console.log(profileData);

        const { profileImage, displayName, email } = profileData;
        setProfileImage(profileImage);
        setDisplayName(displayName);
        setEmail(email);
      } catch (error) {
        console.log('Error retrieving user profile:', error);
      }
    };

    getUserProfile();
  }, [currentUser]);
  
    return(
        <div>
            <img src={profileImage}
            alt={`${displayName}`}
            height="128"
            width="128"
            layout= "intrinsic"
            quality="100"
            />
            <h3 className='my-4 font-medium tracking-wider text-3x1 font-kaushan'>{displayName}</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Web Developer</p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' 
            href='/assets/CV_IliesIonutCristian.pdf' download='CV_IliesIonutCristian.pdf'><GiTie className='w-6 h-6' />Download Resume</a>
            <Links>
                <a href='https://github.com/IlyIonut' target="_blank" rel="noreferrer"><AiFillGithub className='w-8 h-8 cursor-pointer' aria-label='Github'/></a>
                <a href='https://www.linkedin.com/in/ionut-ilies/' target="_blank" rel="noreferrer"><AiFillLinkedin className='w-8 h-8 cursor-pointer' aria-label='Linkedin'/></a>
                <a href='https://www.instagram.com/ili_ionut/' target="_blank" rel="noreferrer"><AiFillInstagram className='w-8 h-8 cursor-pointer' aria-label='Instagram' /></a>
            </Links>
            <Date style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className='flex justify-center space-x-2 idems-center'>
                    <GoLocation/>
                    <span>Cluj, Romania</span>
                </div>
                <p className='my-2'>{email}</p>
                <p className='my-2'>0729062563</p>
            </Date>
            <button
            className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
            onClick={() => window.open('mailto:iliesionut3@gmail.com')} >
            Email Me
            </button>
        </div>
    )
}

export default Sidebar;