import React from "react";
import { Row, Col, Button, Card, Container } from "./main.styled";
import UsersSidebar from "../usersSidebar/usersSidebar.component";
import { fetchUsers } from "../../utils/firebase/firebase.utils";
import { useState,useEffect } from "react";

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


    return (
      <Row>
          <Col>
            <h1>Licenta</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti eaque aliquid magni veniam magnam quisquam non rerum laborum impedit error numquam nam adipisci quaerat reprehenderit recusandae sint, hic cum?</p>
            <Button type="button" >Explore</Button>
          </Col>
          <Container>
            
            {users.slice(0, 2).map((user) => (
              <UsersSidebar key={user.id} user={user} />
            ))}
            
          </Container>
      </Row>

    );
}

export default Main;