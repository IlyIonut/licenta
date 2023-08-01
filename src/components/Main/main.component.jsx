import React from "react";
import { Row, Col, Button, Card, Container, Title } from "./main.styled";
import UsersSidebar from "../usersSidebar/usersSidebar.component";
import { fetchUsers } from "../../utils/firebase/firebase.utils";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <Container>
        
          <Title className=''>
              <h2>SAS</h2><h2>SAS</h2>
              
            </Title>
        
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