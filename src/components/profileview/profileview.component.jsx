import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import { useState } from 'react';
import { UploadResume, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';
import { useContext , useEffect} from 'react';
import { updateUserBirthDate, updateMainOcupation , updateDisplayName, updateProfile} from '../../utils/firebase/firebase.utils';
import { UploadImage } from '../../utils/firebase/firebase.utils';
import { getUserData } from '../../utils/firebase/firebase.utils';


const Profileview = () => {
  const { currentUser } = useContext(UserContext);

 

  const jobOptions = [
    'Software Developer',
    'Data Analyst',
    'UX Designer',
    'Network Administrator',
    'Cybersecurity Analyst',
    'IT Project Manager',
    'Electronics Engineer',
    'Architect',
    'Automation Engineer',
    'Embedded Systems Engineer',
    'Other',
  ];
  
  const [profileData, setProfileData] = useState({
    profileImage: currentUser.profileImage,
    displayName: currentUser.displayName,
    email: currentUser.email,
    mainOcupation: currentUser.mainOcupation,
    description: currentUser.description,
    phoneNumber: currentUser.phoneNumber,
    gitHubLink: currentUser.gitHubLink,
    linkedinLink: currentUser.linkedinLink,
    instagramLink: currentUser.instagramLink,
    resume: currentUser.resume,
    location: currentUser.location,
    skills: currentUser?.skills || [],
    jobs: currentUser?.jobs || [],
  });

  const [newdate, setDate] = useState(currentUser.date || '');
  const [newselectedFile, setSelectedFile] = useState(currentUser.selectedFile || '');
  const [newmainOcupation, setMainOcupation] = useState(currentUser.mainOcupation || '');
  const [newphoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber || '');
  const [newdescription, setDescription] = useState(currentUser.description || '');
  const [newgitHubLink, setGitHubLink] = useState(currentUser.gitHubLink || '');
  const [newlinkedinLink, setLinkedinLink] = useState(currentUser.linkedinLink || '');
  const [newinstagramLink, setInstagramLink] = useState(currentUser.instagramLink || '');
  const [newdisplayName, setNewDisplayName] = useState(currentUser.displayName || '');
  const [newresume, setResume] = useState(currentUser.resume || '');
  const [newlocation, setLocation] = useState(currentUser.location || '');
  const [newSkill, setNewSkill] = useState(profileData.skills || []);
  const [newJob, setNewJob] = useState(profileData.jobs || []);
  const [newFaculty, setNewFaculty] = useState(currentUser.faculty || '');
  const newBirthDate = newdate;
  
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const fetchedProfileData = await getUserData(currentUser);
        setProfileData(fetchedProfileData);
      } catch (error) {
        console.log('Error retrieving user profile:', error);
      }
    };

    getUserProfile();
  }, [currentUser]);

  const handleProfileUpdate = async () => {
    try {
      console.log('ansjdnckjd');
      await UploadImage(newselectedFile, currentUser);
      console.log('Image saved');

      await updateProfile(
        currentUser,
        newphoneNumber,
        newBirthDate,
        newdisplayName,
        newmainOcupation,
        newdescription,
        newgitHubLink,
        newlinkedinLink,
        newinstagramLink,
        newlocation,
        newSkill,
        newJob,
        newFaculty
      );
      console.log('Profile saved');

      await UploadResume(newresume, currentUser);
      console.log('Resume saved');
      alert('Profile Saved');
      // Additional actions or logic after profile updates
    } catch (error) {
      console.log('Error saving profile:', error);
    }
  };

  const handleProfileImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAddSkill = () => {
    setNewSkill([...newSkill, '']);
  };

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
  } = profileData;

  
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...newSkill];
    updatedSkills[index] = value;
    setNewSkill(updatedSkills);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...newSkill];
    updatedSkills.splice(index, 1);
    setNewSkill(updatedSkills);
  };

  const handleAddJob = () => {
    setNewJob([...newJob, '']);
  };

  const handleJobChange = (index, value) => {
    const updatedJobs = [...newJob];
    updatedJobs[index] = value;
    setNewJob(updatedJobs);
  };

  const handleRemoveJob = (index) => {
    const updatedJobs = [...newJob];
    updatedJobs.splice(index, 1);
    setNewJob(updatedJobs);
  };


  

  return (
    <div className="container mx-auto">
      <div className="p-5">
        <h1 className="text-3xl font-bold">Edit Profile</h1>
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Profile Image:</label>
        <input type="file" onChange={handleProfileImageChange} />
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Display Name:</label>
        <input
          type="text"
          value={newdisplayName}
          onChange={(e) => setNewDisplayName(e.target.value)}
          placeholder="Edit your Name"
        />
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Phone Number:</label>
        <input
          type="text"
          value={newphoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Edit your Phone Number"
        />
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Birth Date:</label>
        <DatePicker selected={newdate} onChange={(date) => setDate(date)} />
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Main Occupation:</label>
        <input
          type="text"
          value={newmainOcupation}
          onChange={(e) => setMainOcupation(e.target.value)}
          placeholder="Edit your Main Occupation"
        />
      </div>
      <div className="h-64 p-5">
        <label className="block w-full mb-2 text-lg font-bold h-fit">Description:</label>
        <textarea
          className='w-full h-full'
          value={newdescription}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Edit your Description"
        ></textarea>
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">GitHub Link:</label>
        <input
          type="text"
          value={newgitHubLink}
          onChange={(e) => setGitHubLink(e.target.value)}
          placeholder="Edit your GitHub Link"
        />
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">LinkedIn Link:</label>
        <input
          type="text"
          value={newlinkedinLink}
          onChange={(e) => setLinkedinLink(e.target.value)}
          placeholder="Edit your LinkedIn Link"
        />
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Instagram Link:</label>
        <input
          type="text"
          value={newinstagramLink}
          onChange={(e) => setInstagramLink(e.target.value)}
          placeholder="Edit your Instagram Link"
        />
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Resume:</label>
        <input type="file" onChange={(e) => setResume(e.target.files[0])} />
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Location:</label>
        <input
          type="text"
          value={newlocation}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Edit your Location"
        />
      </div>

      
      
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Add a new skill:</label>
        {newSkill.map((skill, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              placeholder="Enter Skill"
            />
            <button
              className="ml-2 text-red-500"
              onClick={() => handleRemoveSkill(index)}
            >
              Remove
            </button>
          </div>
        ))}
        
        <button className="text-green-500" onClick={handleAddSkill}>
          Add Skill
        </button>
      </div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold">Job:</label>
        {jobs && jobs.map((job, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={job}
              onChange={(e) => handleJobChange(index, e.target.value)}
              placeholder="Enter Job"
            />
            <button
              className="ml-2 text-red-500"
              onClick={() => handleRemoveJob(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button className="text-green-500" onClick={handleAddJob}>
          Add Job
        </button>
      </div>
      <div className="p-5">
        <button
          onClick={handleProfileUpdate}
          className="px-3 py-1 ml-2 text-white bg-green-500 rounded-md"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default Profileview;

