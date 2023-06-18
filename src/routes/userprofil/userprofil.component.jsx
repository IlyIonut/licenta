import { useParams } from "react-router-dom";
import ProfileContext from "../../components/profilecontext/profile-context.component";
import UsersSidebar from "../../components/usersSidebar/usersSidebar.component";
import { useState,useEffect } from "react";
import { fetchUserData } from "../../utils/firebase/firebase.utils";


const UserProfil = () => {


    const {displayName} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
      const getUserData = async () => {
        try {
          const userData = await fetchUserData(displayName);
          setUser(userData);
        } catch (error) {
          // Handle error
        }
      };
  
      getUserData();
    }, [displayName]);

    return(
        <div className='flex items-start w-5/6 gap-8 lg: my-14 sm: md:' >
            {
                
                user ? (
                    <>
                        <div className='w-1/3 h-auto'>
                        <UsersSidebar key={user.uid} user={user} />
                        </div>
                        <div className='w-5/6 overflow-hidden bg-white dark:bg-dark-500 lg: rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
                            <ProfileContext key={user.uid} user={user} />
                        </div>
                    </>
                ) : (
                    <h2>This is the profil</h2>
                )
                
            }
        </div>
        )
}


export default UserProfil;