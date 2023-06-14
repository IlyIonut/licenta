import { Outlet } from "react-router-dom";
import { Container } from './home.styled';

import Directory from "../../components/directory/directory.component";
import Main from "../../components/Main/main.component";

const Home = () => {
  
  return(
    
<Container>
  <Main/>
  {/* <Directory /> */}
  <Outlet />
</Container>

  )
}

export default Home;
