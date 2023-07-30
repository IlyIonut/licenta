import { UserContext } from "../../context/user.context";
import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../../utils/firebase/firebase.utils";
import UsersSidebar from "../../components/usersSidebar/usersSidebar.component";
import { UsersContainer } from "./team.styled";
// import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data.js";
// import SAS_DATA from "../../sas-data";

const Team = () => {

    const [users, setUsers] = useState([]);
    const [selectedOption, setSelectedOption] = useState('All Members');

    const options = [
        {label:'All Members' , option:'All Members'},
        {label:'Volunteers',option:'Volunteers'},
        {label:'Board',option:'Board'},
        {label:'Mentors',option:'Mentors'},
        {label:'Media', option:'Media'},
        {label:'HR', option:'HR'},
        {label:'Events', option:'Events'},
        {label:'Mentoring', option:'Mentoring'},
    ]

    useEffect(()=>{
        const getUsers = async() => {
            //addCollectionAndDocuments('SAS_Membri',SAS_DATA);
            try{
                const userData = await fetchUsers();
                setUsers(userData);
            }catch(error){
                console.log('Error fetching users:',error);
            }
        }
        getUsers();
    },[]);

    const teamfiltered = users.filter((user) => {
        if(user.sasMember === true) {
            switch (selectedOption){
            case 'All Members':
                return true;
            case 'Board':
                return user.role.includes(selectedOption);
            case 'Volunteers':
                return user.role.includes(selectedOption);
            case 'Mentors':
                return user.role.includes(selectedOption);
            case 'Media':
                return user.department.includes(selectedOption);
            case 'HR':
                return user.department.includes(selectedOption);
            case 'Events':
                return user.department.includes(selectedOption);
            case 'Mentoring':
                return user.department.includes(selectedOption);
        }
    }

    });

    return(
        <>
        <div className="p-5 mt-5 input-group-btn search-panel">
            <select option={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option) => (
                    <option value={option.option}>{option.label}</option>
                ))}
            </select>

        </div>
        <UsersContainer>
            {teamfiltered.map((user) => (<UsersSidebar key={users.id} user={user} />))}
        </UsersContainer>
        </>
    )
}

export default Team;