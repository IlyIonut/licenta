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
        
            <SAS className="w-11/12 h-auto"/>
        <Col>
            <h3>Societatea Antreprenorială Studențească</h3>
             <Button onClick={()=>{navigate('/about')}} type="button" >Explore</Button>
          </Col>
        
      </Container>

    );
}

export default Main;