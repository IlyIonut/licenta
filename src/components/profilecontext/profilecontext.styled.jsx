import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: full;
  margin: 0 40px;
  padding: 20px;
  border-radius: 8px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  h2 {
    font-size: 32px;
    font-weight:semi-bold;
    margin-bottom: 5px;
    margin-right:20px;
  }
  p{
    font-size: 22px;
  }
`;

export const ProfileSection = styled.div`
  margin-bottom: 20px;
  p{
    margin-bottom:8px;
    margin-left:10px;
  }
`;

export const ProfileSectionTitle = styled.h4`
  font-size: 22px;
  font-weight: semi-bold;
  margin-bottom: 10px;
`;

export const ProfileSkillsList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;

export const Download = styled.a`
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgb(255, 87, 74);
    color:white;
    border: none;
    outline: none;
    box-shadow: rgba(244, 67, 54, 0.5) 0px 5px 10px;
    padding: 15px 60px;
    cursor: pointer;
    border-radius: 30px;
    width: 200px;
    height: 50px;
    font-weight: 500;
    font-size: 16px;
    
`