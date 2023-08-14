import { UserContext } from "../../context/user.context";
import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../../utils/firebase/firebase.utils";
import UsersSidebar from "../../components/usersSidebar/usersSidebar.component";
import { OptionMenu, SelectMenu, TeamName, UsersContainer } from "./team.styled";
//import Carousel from 'react-elastic-carousel';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            <SelectMenu option={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option) => (
                    <OptionMenu value={option.option}>{option.label}</OptionMenu>
                ))}
            </SelectMenu>

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
        <Swiper className="w-11/12 h-auto"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10} 
            slidesPerView={4} 
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
        {teamfiltered.map((user) => (
            <SwiperSlide className="mx-1 my-7" key={user.uid}>
            <UsersSidebar user={user} />
            </SwiperSlide>
        ))}
        </Swiper>
        </>
    )
}

export default Team;