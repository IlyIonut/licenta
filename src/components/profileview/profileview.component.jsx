import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import { useState } from 'react';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
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


    const {currentUser} = useContext(UserContext);
    const newBirthDate = date;
    const [newdisplayName,setNewDisplayName] = useState('');


    const handleProfileUpdate = async () => {
      try {
        // if (newdisplayName.trim() !== '') {
        //   await updateDisplayName(currentUser, newdisplayName);
        //   console.log('Display name saved:', newdisplayName);
        // } else {
        //   console.log('Name cannot be empty');
        // }
    
        // await updateUserBirthDate(currentUser, newBirthDate);
        // console.log('User birth date updated successfully');
    
        // await updateMainOcupation(currentUser, mainOcupation);
        // console.log('Occupation saved:', mainOcupation);


        await UploadImage(selectedFile,currentUser);
        console.log ('Image saved');

        await updateProfile(currentUser,phoneNumber,newBirthDate,newdisplayName,mainOcupation,description);
        console.log ('Profile saved');
    
        // Any other profile updates you want to handle
    
        // Refresh the profile data if needed
        //await refreshProfileData(); // Assuming you have a refreshProfileData function
    
        // Additional actions or logic after profile updates
      } catch (error) {
        console.log('Error saving profile:', error);
    }
  }
    
    return(
        <div>
                <input 
                type='text'
                value={newdisplayName}
                onChange={(e) => setNewDisplayName(e.target.value)}
                placeholder="Edit your Name" />
                <button onClick={handleProfileUpdate}>Save Name</button>
                <input 
                type='text'
                value={mainOcupation}
                onChange={(e) => setMainOcupation(e.target.value)}
                placeholder="Enter your ocupation" />
                <button onClick={handleProfileUpdate}>Save Occupation</button>
                <input 
                type='text'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Add your phone number" />
                <button onClick={handleProfileUpdate}>Save Phone Number</button>
                <DatePicker selected={date} onChange={setDate} />
                <button onClick={handleProfileUpdate}>Update Birth Date</button>
                <div>
                  <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                  <button onClick={ handleProfileUpdate}>Upload Image</button>
                </div>
                <div>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                  <button onClick={handleProfileUpdate}>Update Description</button>
                </div>
                
        </div>
    )
}

export default Profileview;