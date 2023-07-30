import { UserContext } from "../../context/user.context";
import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../../utils/firebase/firebase.utils";
import UsersSidebar from "../../components/usersSidebar/usersSidebar.component";
import { TeamName, UsersContainer } from "./team.styled";
//import Carousel from 'react-elastic-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
    
    const breakPoints = [
        {width:1200 , itemsToShow:4}
    ];
    const swiperSettings = {
        slidesPerView: 4,
        spaceBetween: 350,
        // Add more settings as needed
      };

    return(
        <>
        <div className="p-5 mt-5 input-group-btn search-panel">
            <select option={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option) => (
                    <option value={option.option}>{option.label}</option>
                ))}
            </select>

        </div>
        <TeamName>
            {(() => {switch(selectedOption){
                case 'All Members':
                    return <h3>SAS Team</h3>;
                case 'Board':
                    return <h3>Board Members</h3>;
                case 'Mentors':
                    return <h3>Mentors</h3>
                case 'Media':
                    return <h3>Media Team</h3>
                case 'HR':
                    return <h3>HR Team</h3>
                case 'Events':
                    return <h3>Events Team</h3>
                case 'Mentoring':
                    return <h3>Mentoring Team</h3>
                case 'Volunteers':
                    return <h3>Volunteers Team</h3>
                default :
                    return <h3>SAT Team</h3>;
            }})()}
        </TeamName>
        <Swiper {...swiperSettings}>
      {teamfiltered.map((user) => (
        <SwiperSlide key={user.id}>
          <UsersSidebar user={user} />
        </SwiperSlide>
      ))}
    </Swiper>
        </>
    )
}

export default Team;