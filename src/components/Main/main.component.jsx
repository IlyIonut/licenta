import React from "react";
import { Row, Col, Button, Card, Container, Title ,Logo} from "./main.styled";
import UsersSidebar from "../usersSidebar/usersSidebar.component";
import { fetchUsers } from "../../utils/firebase/firebase.utils";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as SAS} from "../../assets/LOGO SAS SITE.svg"
import {ReactComponent as Explore} from "../../assets/explore.svg"

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
        <Col>
        <Logo>
          <SAS className="w-3/5 h-auto"/> 
        </Logo>
          
          <h3>Societatea Antreprenorială Studențească</h3>
          <h4>Explore new business ideas!</h4>
          <Button onClick={()=>{navigate('/about')}} type="button" >Explore</Button>
        </Col>
      </Container>

    );
}

export default Main;