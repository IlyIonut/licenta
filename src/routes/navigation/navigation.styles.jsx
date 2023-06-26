import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavTotal = styled.div`
      display: flex;
      -webkit-box-align: start;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;
      
`

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;  
    @media (max-width: 768px) {
      margin-right:30px;
    }
`;

export const LogoContainer= styled(Link)`
      height: 100%;
      width: 70px;
      padding: 25px;
      @media (max-width: 768px) {
            padding:10px;
           
          }
`
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;

  @media (max-width: 768px) {
    .logo {
      /* Updated syntax */
      viewBox: 0 0 60 55;
      width: 50px;
      height: 25px;
    }
  }
`;
export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
`;

  