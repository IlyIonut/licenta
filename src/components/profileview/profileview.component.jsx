import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

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
          email,
          faculty,
          languages,
          department,
          role,
          sasMember,
          phoneNumber,
          mainOcupation,
          description,
          selectedFile,
          date,
          gitHubLink,
          linkedinLink,
          instagramLink,
          resume,
          location,
          skills,
          jobs,
        } = fetchedProfileData;

        setProfileData({
          ...fetchedProfileData,
          skills: skills || [],
          jobs: jobs || [],
        });

        setDate(date || '');
        setSelectedFile(selectedFile || '');
        setMainOcupation(mainOcupation || '');
        setPhoneNumber(phoneNumber || '');
        setDescription(description || '');
        setGitHubLink(gitHubLink || '');
        setLinkedinLink(linkedinLink || '');
        setInstagramLink(instagramLink || '');
        setNewDisplayName(displayName || '');
        setResume(resume || '');
        setLocation(location || '');
        setNewSkillAndJobAndUpdateRest({
          newSkill: skills || [],
          newJob: jobs || [],
        });
        setNewFaculty(faculty || '');
        setNewLanguage(languages || '');
        setNewDepartment(department || '');
        setNewRole(role || '');
        setNewSasMember(sasMember || '');
        setNewCode('');
        setValidation(false);
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
        newFaculty,
        newLanguage,
        newDepartment,
        newRole,
        newSasMember,
      );
      await UploadResume(newresume, currentUser);
      alert('Profile Saved');
    } catch (error) {
      console.log('Error saving profile:', error);
    }
  };

  const setNewSkillAndJobAndUpdateRest = ({ newSkill, newJob }) => {
    setNewSkill(newSkill);
    setNewJob(newJob);
  };
  const handleProfileImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAddSkill = () => {
    setNewSkill([...newSkill, '']);
  };

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
        <label className="block mb-2 text-lg font-bold">Main Occupation:</label>
        <input
          type="text"
          value={newmainOcupation}
          onChange={(e) => setMainOcupation(e.target.value)}
          placeholder="Edit your Main Occupation"
        />
      </div>
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
        <label className="block mb-2 text-lg font-bold">Known languages:</label>
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
          placeholder="Edit your known languages"
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
        <label className="block mb-2 text-lg font-bold">Are you a SAS member?</label>
        <Popup trigger={<button className="ml-2 text-green-500">Yes</button>} position={'right center'} >
        <div className='flex flex-wrap w-3/4 overflow-hidden bg-white dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-wrap justify-start p-2'>
            <label className="block px-3 mb-2 text-lg font-bold">Insert SAS Code:</label>
            <input
              type="text"
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              placeholder="Insert SAS Code"
              className='px-3 mb-2'
            />
            </div>
            <div className="mr-7">
            <button
              onClick={() =>{if(newCode === 'SASUTCN'){
                setValidation(true);
                setNewSasMember(true);
              }else{
                alert('Code Invalid');
              }}}
              className="px-3 py-1 ml-1 text-white bg-green-500 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
        {validation && (
          <div className='flex items-center justify-center my-2 flex-column' >
              <div className='p-5 input-group-btn search-panel'>
                  <select option={departmentOption} onChange={(e)=>setNewDepartment(e.target.value)}>
                      {departmentOption.map((option) => (
                        <option value={option.option}>{option.label}</option>
                      ))}
                  </select>
              </div>
              <div className='input-group-btn search-panel'>
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
        ) }
      </div>
        </Popup>
        <button onClick={()=>{navigate('/contactus')}} className="ml-2 text-gray-500">No, but how I can become?</button>
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
        <label className="block mb-2 text-lg font-bold">Add a new job:</label>
        {newJob.map((job, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={job}
              onChange={(e) => handleJobChange(index, e.target.value)}
              placeholder="Enter job"
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

