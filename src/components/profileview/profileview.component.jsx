import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import { useState } from 'react';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import { updateUserBirthDate } from '../../utils/firebase/firebase.utils';
import { handleUploadImage } from '../../utils/firebase/firebase.utils';
import { getUserData } from '../../utils/firebase/firebase.utils';

const Profileview = () => {

    const [date, setDate] = useState(new Date());
    const [selectedFile,setSelectedFile] = useState(null);

    const {currentUser} = useContext(UserContext);
    const newBirthDate = date;

    const handleUpdateBirthDate = async () => {
        // Assuming you have the user ID and new birth date available
        try {
          await updateUserBirthDate(currentUser, newBirthDate);
          console.log('User birth date updated successfully');
        } catch (error) {
          console.log('Error updating user birth date:', error.message);
        }
      };
    const handleProfileImageChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
    
    
    return(
        <div>
                <DatePicker selected={date} onChange={setDate} />
                <button onClick={handleUpdateBirthDate}>Update Birth Date</button>
                <div>
                  <input type="file" onChange={handleProfileImageChange} />
                  <button onClick={ () => handleUploadImage(selectedFile,currentUser)}>Upload Image</button>
                </div>
                
                
        </div>
    )
}

export default Profileview;