import React from "react";
import { Row, Col, Button, Card, Container, Title } from "./main.styled";
import UsersSidebar from "../usersSidebar/usersSidebar.component";
import { fetchUsers } from "../../utils/firebase/firebase.utils";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as SAS} from "../../assets/LOGO SAS SITE.svg"

const Main = () =>  {

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


      const navigate = useNavigate();

    return (
      <Container className="w-4/5">
        
          {/* <Title className=''>
              <h2><span className="text-fuchsia-950">S</span><span className="text-yellow-500" >A</span><span className="text-orange-500">S</span></h2>
              <h2><span className="text-fuchsia-950">S</span><span className="text-yellow-500" >A</span><span className="text-orange-500">S</span></h2>
              
               
            </Title> */}
            <SAS className="w-11/12 h-auto"/>
        <Col>
            <h3>Societatea Antreprenorială Studențească</h3>
            {/* <h1>Societatea Antreprenorială Studențească din cadrul UTCN</h1> */}
            {/* <p>Create connections with new people depending on the skills you are looking for. Find partners, mentors or why not even new friends!</p> */}
            <Button onClick={()=>{navigate('/users')}} type="button" >Explore</Button>
          </Col>
        
      </Container>

    );
}

export default Main;