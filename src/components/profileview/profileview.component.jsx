import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import { useState } from 'react';
import { UploadResume, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import { updateUserBirthDate, updateMainOcupation , updateDisplayName, updateProfile} from '../../utils/firebase/firebase.utils';
import { UploadImage } from '../../utils/firebase/firebase.utils';
import { getUserData } from '../../utils/firebase/firebase.utils';

const Profileview = () => {

    


    const {currentUser} = useContext(UserContext);
    
    const [date, setDate] = useState(currentUser.date || '');
    const [selectedFile,setSelectedFile] = useState(currentUser.selectedFile || '');
    const [mainOcupation, setMainOcupation] = useState(currentUser.mainOcupation || '');
    const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber || '');
    const [description , setDescription] = useState(currentUser.description || '');
    const [gitHubLink, setGitHubLink] = useState(currentUser.gitHubLink || '');
    const [linkedinLink, setLinkedinLink] = useState(currentUser.linkedinLink || '');
    const [instagramLink, setInstagramLink] = useState(currentUser.instagramLink || '');
    const [displayName,setNewDisplayName] = useState(currentUser.displayName || '');
    const [resume, setResume] = useState(currentUser.resume || '');
    const [location, setLocation] = useState(currentUser.location || '');
    const [newSkill,setNewSkill] = useState('');
    const newBirthDate = date;

    const [profileData, setProfileData] = useState({
      profileImage: '',
      displayName: '',
      email: '',
      mainOcupation: '',
      phoneNumber: '',
      gitHubLink: '',
      linkedinLink: '',
      instagramLink: '',
      resume: '',
      skills: [],
    });

    const handleProfileUpdate = async () => {
      try {
        
        await UploadImage(selectedFile,currentUser);
        console.log ('Image saved');

        await updateProfile(currentUser,phoneNumber,newBirthDate,displayName,mainOcupation,description,gitHubLink,linkedinLink,instagramLink, location, newSkill);
        console.log ('Profile saved');

        await UploadResume(resume,currentUser);
        console.log('Resume saved');
    
        // Any other profile updates you want to handle
    
        // Refresh the profile data if needed
        //await refreshProfileData(); // Assuming you have a refreshProfileData function
    
        // Additional actions or logic after profile updates
      } catch (error) {
        console.log('Error saving profile:', error);
    }
  }

    const handleProfileImageChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleResumeChange = (e) => {
      setResume(e.target.files[0]);
    };
  
    const handleAddSkill = () => {
      if (newSkill.trim() !== '') {
        setProfileData((prevState) => ({
          ...prevState,
          skills: [...prevState.skills, newSkill.trim()],
        }));
        setNewSkill('');
        handleProfileUpdate();
      }
    };
    

    
    return(
        <div className='px-3 py-3 ml-2'>
            <div className='px-3 py-3 ml-2'>
                <input 
                type='text'
                value={displayName}
                onChange={(e) => setNewDisplayName(e.target.value)}
                placeholder="Edit your Name" />
                <button onClick={handleProfileUpdate}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Name</button>
            </div>
            <div className='px-3 py-3 ml-2'>
                <input 
                type='text'
                value={mainOcupation}
                onChange={(e) => setMainOcupation(e.target.value)}
                placeholder="Enter your ocupation" />
                <button onClick={handleProfileUpdate}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Occupation</button>
          </div>
          <div className='px-3 py-3 ml-2'>
          <input 
                type='text'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Add your phone number" />
                <button onClick={handleProfileUpdate}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Phone Number</button>
          </div>
          <div className='px-3 py-3 ml-2' >
          <input 
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Add your location" />
                <button onClick={handleProfileUpdate}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Location</button>
          </div>
          <div className='px-3 py-3 ml-2'>
          <input 
                type='text'
                value={gitHubLink}
                onChange={(e) => setGitHubLink(e.target.value)}
                placeholder="Add your GitHub" />
                <button onClick={handleProfileUpdate}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save GitHub Link</button>
          </div>
          <div className='px-3 py-3 ml-2'>
          <input 
                type='text'
                value={linkedinLink}
                onChange={(e) => setLinkedinLink(e.target.value)}
                placeholder="Add your Linkedin" />
                <button onClick={handleProfileUpdate}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Linkedin Link</button>
          </div>
          <div className='px-3 py-3 ml-2'>
          <input 
                type='text'
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
                placeholder="Add your Instagram" />
                <button onClick={handleProfileUpdate}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Instagram Link</button>
          </div>
     

          <div className='px-3 py-3 ml-2 bg-white dark:bg-dark-200'>
            <h4 className='mb-2 text-lg font-medium'>Skills</h4>

            {profileData.skills && profileData.skills.length === 0 ? (
                      <p>No skills added yet.</p>
                  ) : (
                      <ul className='list-disc list-inside'>
                          {profileData.skills && profileData.skills.map((skill, index) => (
                              <li key={index}>{skill}</li>
                          ))}
                      </ul>
                  )}

            <div className='mt-4'>
              <input
                type='text'
                value={newSkill}
                onChange={(e)=>setNewSkill(e.target.value)}
                placeholder='Add a new skill'
                className='px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              />
              <button
                onClick={handleAddSkill}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'
              >
                Add Skill
              </button>
            </div>
        </div>

                <div className='px-3 py-3 ml-2'>
                <DatePicker className='px-3 py-3 ml-2' selected={date} onChange={setDate} />
                <button onClick={handleProfileUpdate}
                className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Update Birth Date</button>
                </div>
                
                <div className='px-3 py-3 ml-2'>
                  <input type="file" onChange={handleProfileImageChange} />
                  <button onClick={ handleProfileUpdate}
                  className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Upload Image</button>
                </div>
                <div className='px-3 py-3 ml-2'>
                  <input type="file" onChange={handleResumeChange} />
                  <button onClick={ handleProfileUpdate}
                  className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Upload Your Resume</button>
                </div>
                <div className='px-3 py-3 ml-2'>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                  <button onClick={handleProfileUpdate}
                  className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Update Description</button>
                </div>
                
        </div>
    )
}

export default Profileview;