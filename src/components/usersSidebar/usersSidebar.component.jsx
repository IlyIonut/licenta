import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useState, useContext , useEffect} from 'react'
import { UserContext } from '../../context/user.context'
import { getUserData } from '../../utils/firebase/firebase.utils'
import {useTheme} from 'next-themes'
//import Image from 'next/legacy/image'

const UsersSidebar = ({user}) => {

    const {theme ,setTheme} = useTheme();

    const changeTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    //const { currentUser } = useContext(UserContext);
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
          const fetchedProfileData = await getUserData(user);
          setProfileData(fetchedProfileData);
        } catch (error) {
          console.log('Error retrieving user profile:', error);
        }
      };
  
      getUserProfile();
    }, [user, profileData]);
  
    const {
      profileImage,
      displayName,
      email,
      mainOcupation,
      phoneNumber,
      gitHubLink,
      linkedinLink,
      instagramLink,
      resume,
    } = user;

    return(
      <div className='col-span-12 p-4 text-center text-white bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-dark dark:shadow-custom-dark'>
            <img src={profileImage}
            alt={`${displayName}`}
            className='w-32 h-32 mx-auto rounded-full'
            height="128"
            width="128"
            layout= "intrinsic"
            quality="100"
            />
            <h3 className='my-4 font-medium tracking-wider text-3x1 font-kaushan'>{displayName}</h3>
            <p className='px-2 py-1 my-3 rounded-full bg-dark-200 dark:bg-dark-200'>{mainOcupation}</p>
            <a className='flex items-center justify-center px-2 py-1 my-3 rounded-full bg-dark-200 dark:bg-dark-200' 
            href={resume} download={`${displayName}.pdf`} target="_blank" rel="noreferrer"><GiTie className='w-6 h-6' />Download Resume</a>
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href={gitHubLink} target="_blank" rel="noreferrer"><AiFillGithub className='w-8 h-8 cursor-pointer' aria-label='Github'/></a>
                <a href={linkedinLink} target="_blank" rel="noreferrer"><AiFillLinkedin className='w-8 h-8 cursor-pointer' aria-label='Linkedin'/></a>
                <a href={instagramLink} target="_blank" rel="noreferrer"><AiFillInstagram className='w-8 h-8 cursor-pointer' aria-label='Instagram' /></a>
            </div>
            <div className='py-4 my-5 bg-dark-200 dark:bg-dark-200' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className='flex justify-center space-x-2 idems-center'>
                    <GoLocation/>
                    <span>Cluj, Romania</span>
                </div>
                <p className='my-2'>{email}</p>
                <p className='my-2'>{phoneNumber}</p>
            </div>
            <button
            className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
            onClick={() => window.open(`mailto:{${email}}`)} >
            Email Me
            </button>
            <button onClick={changeTheme} className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Themes</button>
        </div>
    )
  }

export default UsersSidebar;