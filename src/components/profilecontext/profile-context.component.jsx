import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/user.context';
import { getUserData } from '../../utils/firebase/firebase.utils';
import { ProfileHeader, ProfileContainer, ProfileInfo, ProfileSkillsList, ProfileSection ,ProfileSectionTitle} from './profilecontext.styled';

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
  } = user;

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileInfo>
          <h2>{displayName}</h2>
          <p>{email}</p>
          <p>{mainOccupation}</p>
        </ProfileInfo>
      </ProfileHeader>
      <div className="profile-body">
        <ProfileSection>
          <ProfileSectionTitle>About</ProfileSectionTitle>
          <p>{description}</p>
        </ProfileSection>
        <ProfileSection>
          <ProfileSectionTitle>Contact</ProfileSectionTitle>
          <p>{phoneNumber}</p>
          <p>{email}</p>
          <p>{location}</p>
          <a className='flex items-center justify-center px-2 py-1 my-3 bg-white rounded-full dark:bg-dark-200' 
            href={resume} download={`${displayName}.pdf`} target="_blank" rel="noreferrer">Download Resume</a>
        </ProfileSection>
        <ProfileSection>
          <ProfileSectionTitle>Skills</ProfileSectionTitle>
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
      </div>
    </ProfileContainer>
  );
};
export default ProfileContext;