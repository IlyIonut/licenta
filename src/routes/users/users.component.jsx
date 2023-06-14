import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import Sidebar from '../../components/side-profile/side-profile.component';
import UsersSidebar from '../../components/usersSidebar/usersSidebar.component';
import { fetchUsers } from '../../utils/firebase/firebase.utils';
import { UsersContainer } from './users.styled';

const UserSidebarPage = () => {
  const [users, setUsers] = useState([]);

  
    useEffect(() => {
        const getUsers = async () => {
          try {
            const userData = await fetchUsers();
            setUsers(userData);
          } catch (error) {
            console.error('Error retrieving user data:', error);
          }
        };
    
        getUsers();
      }, []);

  return (
    <UsersContainer>
      {users.map((user) => (
        <UsersSidebar key={user.id} user={user} />
      ))}
    </UsersContainer>
  );
}
export default UserSidebarPage;