import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './profileview.styles.scss';
import { useState } from 'react';
import { UploadResume, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';
import { useContext , useEffect} from 'react';
import { updateUserBirthDate, updateMainOcupation , updateDisplayName, updateProfile} from '../../utils/firebase/firebase.utils';
import { UploadImage } from '../../utils/firebase/firebase.utils';
import { getUserData } from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';


const Profileview = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const initialProfileData = {
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
    faculty: currentUser.faculty,
    languages: currentUser.languages,
    department: currentUser.department,
    role: currentUser.role,
    sasMember: currentUser.sasMember,
  };

  const [profileData, setProfileData] = useState(initialProfileData);
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
  const [newLanguage, setNewLanguage] = useState(currentUser.languages || '');
  const [newDepartment, setNewDepartment] = useState(currentUser.department || '');
  const [newRole, setNewRole] = useState(currentUser.role || '');
  const [newSasMember, setNewSasMember] = useState(currentUser.sasMember || '');
  const [newCode, setNewCode] = useState('');
  const [validation, setValidation] = useState(false);
  const newBirthDate = newdate;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const fetchedProfileData = await getUserData(currentUser);
        const {
          displayName,
          faculty,
          department,
          role,
          phoneNumber,
          mainOcupation,
          selectedFile,
          gitHubLink,
          linkedinLink,
          instagramLink,
        } = fetchedProfileData;

        setProfileData({
          ...fetchedProfileData,
        });

       
        setSelectedFile(selectedFile || '');
        setMainOcupation(mainOcupation || '');
        setPhoneNumber(phoneNumber || '');
        
        setGitHubLink(gitHubLink || '');
        setLinkedinLink(linkedinLink || '');
        setInstagramLink(instagramLink || '');
        setNewDisplayName(displayName || '');
        
        setNewFaculty(faculty || '');
       
        setNewDepartment(department || '');
        setNewRole(role || '');
       
      } catch (error) {
        console.log('Error retrieving user profile:', error);
      }
    };

    fetchUserProfile();
  }, [currentUser]);

  const handleProfileUpdate = async () => {
    try {
      await UploadImage(newselectedFile, currentUser);
      await updateProfile(
        currentUser,
        newphoneNumber,
        
        newdisplayName,
        newmainOcupation,
        
        newgitHubLink,
        newlinkedinLink,
        newinstagramLink,
        
        newFaculty,
       
        newDepartment,
        newRole,
       
      );
      // await UploadResume(newresume, currentUser);
      alert('Profile Saved');
    } catch (error) {
      console.log('Error saving profile:', error);
    }
  };

  // const setNewSkillAndJobAndUpdateRest = ({ newSkill, newJob }) => {
  //   setNewSkill(newSkill);
  //   setNewJob(newJob);
  // };
  const handleProfileImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // const handleAddSkill = () => {
  //   setNewSkill([...newSkill, '']);
  // };

  // const handleSkillChange = (index, value) => {
  //   const updatedSkills = [...newSkill];
  //   updatedSkills[index] = value;
  //   setNewSkill(updatedSkills);
  // };

  // const handleRemoveSkill = (index) => {
  //   const updatedSkills = [...newSkill];
  //   updatedSkills.splice(index, 1);
  //   setNewSkill(updatedSkills);
  // };

  // const handleAddJob = () => {
  //   setNewJob([...newJob, '']);
  // };

  // const handleJobChange = (index, value) => {
  //   const updatedJobs = [...newJob];
  //   updatedJobs[index] = value;
  //   setNewJob(updatedJobs);
  // };

  // const handleRemoveJob = (index) => {
  //   const updatedJobs = [...newJob];
  //   updatedJobs.splice(index, 1);
  //   setNewJob(updatedJobs);
  // };

  const departmentOption = [
    {label: 'Department', option: 'Department'},
    {label:'Media', value:'Media'},
    {label:'HR', value: 'HR'},
    {label:'Events', value: 'Events'},
    {label:'Mentoring', value: 'Mentoring'}
  ];

  const roleOption = [
    {label: 'All', option: 'All'},
    {label:'Volunteers', value:'Volunteers'},
    {label:'Board', value: 'Board'},
    {label:'Mentors', value: 'Mentors'}
  ]



  

  return (
    <div className="editContainer">
      <div className="p-5">
        <h1 className="text-3xl font-bold">Edit Profile</h1>
      </div>
      <div className='editSpace'>
            <div className='rand1'>
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
                <label className="block mb-2 text-lg font-bold">Main Occupation:</label>
                <input
                  type="text"
                  value={newmainOcupation}
                  onChange={(e) => setMainOcupation(e.target.value)}
                  placeholder="Edit your Main Occupation"
                />
              </div>
            </div>
            <div className='rand2'>
              <div className="p-5">
                <label className="block mb-2 text-lg font-bold">Faculty:</label>
                <input
                  type="text"
                  value={newFaculty}
                  onChange={(e) => setNewFaculty(e.target.value)}
                  placeholder="Edit your Faculty"
                />
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
            </div>
      
      </div>
      
      <div className='buttonPanel'>
          <div className='selectPanel'>
                      <select option={departmentOption} onChange={(e)=>setNewDepartment(e.target.value)}>
                          {departmentOption.map((option) => (
                            <option value={option.option}>{option.label}</option>
                          ))}
                      </select>
                  <select option={roleOption} onChange={(e)=>setNewRole(e.target.value)}>
                      {roleOption.map((option) => (
                        <option value={option.option}>{option.label}</option>
                      ))}
                  </select>
                    
          </div>
           <div className="p-5">
                    <button
                      onClick={handleProfileUpdate}
                      className="px-3 py-1 ml-2 text-white bg-green-500 rounded-md"
                    >
                      Save SAS Membership
                    </button>
           </div>
         
      </div>
     
      
    </div> 
  );
};

export default Profileview;

