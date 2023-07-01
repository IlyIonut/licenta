import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/user.context';
import { getUserData } from '../../utils/firebase/firebase.utils';
import { ProfileHeader, ProfileContainer, ProfileInfo, ProfileSkillsList, ProfileSection ,ProfileSectionTitle, Download} from './profilecontext.styled';
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'


const ProfileContext = ({ user }) => {
  const [profileData, setProfileData] = useState({
    profileImage: '',
    displayName: '',
    email: '',
    mainOccupation: '',
    description: '',
    phoneNumber: '',
    gitHubLink: '',
    linkedinLink: '',
    instagramLink: '',
    resume: '',
    location: '',
    skills: [],
    jobs: [],
    faculty:'',
  });

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const fetchedProfileData = await getUserData(user);
        setProfileData(fetchedProfileData);
      } catch (error) {
        console.log('Error retrieving user profile:', error);
      }
    };

    getUserProfile();
  }, [user]);

  const {
    profileImage,
    displayName,
    email,
    mainOccupation,
    description,
    phoneNumber,
    gitHubLink,
    linkedinLink,
    instagramLink,
    resume,
    location,
    skills,
    jobs,
    faculty,
    languages,
  } = user;

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileInfo>
          <h2>{displayName}</h2>
          <h2>-</h2>
          <p>{mainOccupation}</p>
          
        </ProfileInfo>
        <p>{faculty}</p>
      </ProfileHeader>
      
      <div className="profile-body">
        <ProfileSection>
          <ProfileSectionTitle>About</ProfileSectionTitle>
          <p>{description}</p>
        </ProfileSection>
        <ProfileSection>
          <ProfileSectionTitle>Contact</ProfileSectionTitle> 
          <p>Phone Number: {phoneNumber}</p>
          <p>Email: {email}</p>
          <div className='flex space-x-2 items-center mx-2' >
            <GoLocation/>
            <span>{location}</span>
          </div>
          
        </ProfileSection>
        <ProfileSection>
          <ProfileSectionTitle>Skills</ProfileSectionTitle>
          <p>Known languages:{languages}</p>
          {skills && skills.length === 0 ? (
            <p>No skills added yet.</p>
          ) : (
            <ProfileSkillsList>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ProfileSkillsList>
          )}
        </ProfileSection>
        <ProfileSection>
          <ProfileSectionTitle>Jobs</ProfileSectionTitle>
          {jobs && jobs.length === 0 ? (
            <p>No job added yet.</p>
          ) : (
            <ProfileSkillsList>
              {jobs.map((job) => (
                <li key={job}>{job}</li>
              ))}
            </ProfileSkillsList>
          )}
          
        </ProfileSection>
        <div className='flex items-center justify-center'>
        
        <Download
        className=""
        href={resume}
        download={`${displayName}.pdf`}
        target="_blank"
        rel="noreferrer"
        >
        <p className="text-center">Download Resume</p>
        </Download>
        </div>      
      </div>
    </ProfileContainer>
  );
};
export default ProfileContext;