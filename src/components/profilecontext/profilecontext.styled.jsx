import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const ProfileHeader = styled.div`
  display: flex;
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
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const ProfileSection = styled.div`
  margin-bottom: 20px;
`;

export const ProfileSectionTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ProfileSkillsList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;