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

    const [date, setDate] = useState(new Date());
    const [selectedFile,setSelectedFile] = useState('');
    const [mainOcupation, setMainOcupation] = useState('Your ocupation');
    const [phoneNumber, setPhoneNumber] = useState('Your phone number');
    const [description , setDescription] = useState('Your description');
    const [gitHubLink, setGitHubLink] = useState('GitHub Link');
    const [linkedinLink, setLinkedinLink] = useState('Linkedin Link');
    const [instagramLink, setInstagramLink] = useState('Instagram Link');
    const [newdisplayName,setNewDisplayName] = useState('Your Name');
    const [resume, setResume] = useState('Resume');


    const {currentUser} = useContext(UserContext);
    const newBirthDate = date;
    


    const handleProfileUpdate = async () => {
      try {
        
        await UploadImage(selectedFile,currentUser);
        console.log ('Image saved');

        await updateProfile(currentUser,phoneNumber,newBirthDate,newdisplayName,mainOcupation,description,gitHubLink,linkedinLink,instagramLink);
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
      console.log(e.target.files[0]);
      setResume(e.target.files[0]);
    };
  
    
    return(
        <div>
            <div>
                <input 
                type='text'
                value={newdisplayName}
                onChange={(e) => setNewDisplayName(e.target.value)}
                placeholder="Edit your Name" />
                <button onClick={handleProfileUpdate}>Save Name</button>
            </div>
            <div>
                <input 
                type='text'
                value={mainOcupation}
                onChange={(e) => setMainOcupation(e.target.value)}
                placeholder="Enter your ocupation" />
                <button onClick={handleProfileUpdate}>Save Occupation</button>
          </div>
          <div>
          <input 
                type='text'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Add your phone number" />
                <button onClick={handleProfileUpdate}>Save Phone Number</button>
          </div>
          <div>
          <input 
                type='text'
                value={gitHubLink}
                onChange={(e) => setGitHubLink(e.target.value)}
                placeholder="Add your GitHub" />
                <button onClick={handleProfileUpdate}>Save GitHub Link</button>
          </div>
          <div>
          <input 
                type='text'
                value={linkedinLink}
                onChange={(e) => setLinkedinLink(e.target.value)}
                placeholder="Add your Linkedin" />
                <button onClick={handleProfileUpdate}>Save Linkedin Link</button>
          </div>
          <div>
          <input 
                type='text'
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
                placeholder="Add your Instagram" />
                <button onClick={handleProfileUpdate}>Save Instagram Link</button>
          </div>
                <div>
                <DatePicker selected={date} onChange={setDate} />
                <button onClick={handleProfileUpdate}>Update Birth Date</button>
                </div>
                
                <div>
                  <input type="file" onChange={handleProfileImageChange} />
                  <button onClick={ handleProfileUpdate}>Upload Image</button>
                </div>
                <div>
                  <input type="file" onChange={handleResumeChange} />
                  <button onClick={ handleProfileUpdate}>Upload Your Resume</button>
                </div>
                <div>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                  <button onClick={handleProfileUpdate}>Update Description</button>
                </div>
                
        </div>
    )
}

export default Profileview;