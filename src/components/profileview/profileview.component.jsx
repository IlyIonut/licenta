import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import { useState } from 'react';
import { UploadResume, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';
import { useContext , useEffect} from 'react';
import { updateUserBirthDate, updateMainOcupation , updateDisplayName, updateProfile} from '../../utils/firebase/firebase.utils';
import { UploadImage } from '../../utils/firebase/firebase.utils';
import { getUserData } from '../../utils/firebase/firebase.utils';

// const Profileview = () => {

    


//     const {currentUser} = useContext(UserContext);
    
//     const [newdate, setDate] = useState(currentUser.date || '');
//     const [newselectedFile,setSelectedFile] = useState(currentUser.selectedFile || '');
//     const [newmainOcupation, setMainOcupation] = useState(currentUser.mainOcupation || '');
//     const [newphoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber || '');
//     const [newdescription , setDescription] = useState(currentUser.description || '');
//     const [newgitHubLink, setGitHubLink] = useState(currentUser.gitHubLink || '');
//     const [newlinkedinLink, setLinkedinLink] = useState(currentUser.linkedinLink || '');
//     const [newinstagramLink, setInstagramLink] = useState(currentUser.instagramLink || '');
//     const [newdisplayName,setNewDisplayName] = useState(currentUser.displayName || '');
//     const [newresume, setResume] = useState(currentUser.resume || '');
//     const [newlocation, setLocation] = useState(currentUser.location || '');
//     const [newSkill,setNewSkill] = useState(currentUser.skills || '');
//     const [newJob,setNewJob] = useState(currentUser.jobs || []);
//     const [newFaculty,setNewFaculty] = useState(currentUser.faculty || '');
//     const newBirthDate = newdate;


//     const jobOptions = [
//       'Software Developer',
//       'Data Analyst',
//       'UX Designer',
//       'Network Administrator',
//       'Cybersecurity Analyst',
//       'IT Project Manager',
//       'Electronics Engineer',
//       'Architect',
//       'Automation Engineer',
//       'Embedded Systems Engineer',
//       'Other',
//     ];

//     const [profileData, setProfileData] = useState({
//       profileImage: '',
//       displayName: currentUser.displayName,
//       email: '',
//       mainOcupation: currentUser.mainOcupation,
//       description:'',
//       phoneNumber: '',
//       gitHubLink:'',
//       linkedinLink:'',
//       instagramLink:'',
//       resume:'',
//       location:'',

//     });
  
//     useEffect(() => {
//       const getUserProfile = async () => {
//         try {
//           const fetchedProfileData = await getUserData(currentUser);
//           setProfileData(fetchedProfileData);
//         } catch (error) {
//           console.log('Error retrieving user profile:', error);
//         }
//       };
  
//       getUserProfile();
//     }, [currentUser, profileData]);
  
//     const { profileImage, displayName, email,description, mainOcupation , phoneNumber, gitHubLink, linkedinLink, instagramLink, resume, location} = profileData;

//     console.log(currentUser.skills);

//   //   const handleProfileUpdate = async () => {
//   //     try {
        
//   //       await UploadImage(newselectedFile,currentUser);
//   //       console.log ('Image saved');

//   //       await updateProfile(currentUser,newphoneNumber,newBirthDate,newdisplayName,newmainOcupation,newdescription,newgitHubLink,newlinkedinLink,newinstagramLink, newlocation, newSkill,newJob ,newFaculty);
//   //       console.log ('Profile saved');

//   //       await UploadResume(newresume,currentUser);
//   //       console.log('Resume saved');
    
//   //       // Any other profile updates you want to handle
    
//   //       // Refresh the profile data if needed
//   //       //await refreshProfileData(); // Assuming you have a refreshProfileData function
    
//   //       // Additional actions or logic after profile updates
//   //     } catch (error) {
//   //       console.log('Error saving profile:', error);
//   //   }
//   // }

//     const handleProfileImageChange = (e) => {
//       setSelectedFile(e.target.files[0]);
//     };
  
//     const handleResumeChange = (e) => {
//       setResume(e.target.files[0]);
//     };
  
//     const handleAddSkill = () => {
//       if (newSkill.trim() !== '') {
//         setProfileData((prevState) => ({
//           ...prevState,
//           skills: [...prevState.skills, newSkill.trim()],
//         }));
//         setNewSkill('');
//       }
//     };
//     const handleAddJob = () => {
//       if (newJob.trim() !== '') {
//         setProfileData((prevState) => ({
//           ...prevState,
//           jobs: [...prevState.jobs, newJob.trim()],
//         }));
//         setNewJob('');
//       }
//     };

    
// const handleSaveProfile = async () => {
//   try {
//     await UploadImage(newselectedFile, currentUser);
//     console.log('Image saved');

//     await updateProfile(
//       currentUser,
//       newphoneNumber,
//       newBirthDate,
//       newdisplayName,
//       newmainOcupation,
//       newdescription,
//       newgitHubLink,
//       newlinkedinLink,
//       newinstagramLink,
//       newlocation,
//       profileData.skills,
//       profileData.jobs,
//       newFaculty
//     );
//     console.log('Profile saved');

//     await UploadResume(newresume, currentUser);
//     console.log('Resume saved');

//     // Any other profile updates you want to handle

//     // Refresh the profile data if needed
//     //await refreshProfileData(); // Assuming you have a refreshProfileData function

//     // Additional actions or logic after profile updates
//   } catch (error) {
//     console.log('Error saving profile:', error);
//   }
// };

    
//     return(
//         <div className='px-3 py-3 ml-2'>
//             <div className='px-3 py-3 ml-2'>
//                 <input 
//                 type='text'
//                 value={newdisplayName}
//                 onChange={(e) => setNewDisplayName(e.target.value)}
//                 placeholder="Edit your Name" />
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newdisplayName }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Name</button>
//             </div>
//             <div>
//                 <select value={mainOcupation} onChange={(e) => setMainOcupation(e.target.value)}>
//                   <option value="">Select a job category</option>
//                   {jobOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//                 {mainOcupation === 'Other' && (
//                   <input
//                     type="text"
//                     placeholder="Enter your job category"
//                     value={newmainOcupation}
//                     onChange={(e) => setMainOcupation(e.target.value)}
//                   />
//                 )}
   
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newmainOcupation }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Occupation</button>
//           </div>
//           <div className='px-3 py-3 ml-2'>
//           <input 
//                 type='text'
//                 value={newphoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Add your phone number" />
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newphoneNumber }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Phone Number</button>
//           </div>
//           <div className='px-3 py-3 ml-2' >
//           <input 
//                 type='text'
//                 value={newlocation}
//                 onChange={(e) => setLocation(e.target.value)}
//                 placeholder="Add your location" />
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newlocation }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Location</button>
//           </div>
//           <div className='px-3 py-3 ml-2'>
//           <input 
//                 type='text'
//                 value={newFaculty}
//                 onChange={(e) => setNewFaculty(e.target.value)}
//                 placeholder="Add your Faculty" />
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newFaculty }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Faculty</button>
//           </div>
//           <div className='px-3 py-3 ml-2'>
//           <input 
//                 type='text'
//                 value={newgitHubLink}
//                 onChange={(e) => setGitHubLink(e.target.value)}
//                 placeholder="Add your GitHub" />
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newgitHubLink }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save GitHub Link</button>
//           </div>
//           <div className='px-3 py-3 ml-2'>
//           <input 
//                 type='text'
//                 value={newlinkedinLink}
//                 onChange={(e) => setLinkedinLink(e.target.value)}
//                 placeholder="Add your Linkedin" />
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newlinkedinLink }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Linkedin Link</button>
//           </div>
//           <div className='px-3 py-3 ml-2'>
//           <input 
//                 type='text'
//                 value={newinstagramLink}
//                 onChange={(e) => setInstagramLink(e.target.value)}
//                 placeholder="Add your Instagram" />
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newinstagramLink }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Save Instagram Link</button>
//           </div>
     

//           <div className='px-3 py-3 ml-2 bg-white dark:bg-dark-200'>
//             <h4 className='mb-2 text-lg font-medium'>Skills</h4>

//             {profileData.skills && profileData.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}

//             <div className='mt-4'>
//               <input
//                 type='text'
//                 value={newSkill}
//                 onChange={(e)=>setNewSkill(e.target.value)}
//                 placeholder='Add a new skill'
//                 className='px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//               />
//               <button
//                 onClick={handleAddSkill}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'
//               >
//                 Add Skill
//               </button>
//             </div>
//         </div>
//         <div className='px-3 py-3 ml-2 bg-white dark:bg-dark-200'>
//             <h4 className='mb-2 text-lg font-medium'>Jobs</h4>

//             {profileData.jobs && profileData.jobs.map((job, index) => (
//               <li key={index}>{job}</li>
//             ))}

//             <div className='mt-4'>
//               <input
//                 type='text'
//                 value={newJob}
//                 onChange={(e)=>setNewJob(e.target.value)}
//                 placeholder='Add a new skill'
//                 className='px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//               />
//               <button
//                 onClick={handleAddJob}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'
//               >
//                 Add Job
//               </button>
//             </div>
//         </div>

//                 <div className='px-3 py-3 ml-2'>
//                 <DatePicker className='px-3 py-3 ml-2' selected={newdate} onChange={setDate} />
//                 <button onClick={setProfileData((prevState) => ({ ...prevState, displayName: newdate }))}
//                 className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Update Birth Date</button>
//                 </div>
                
//                 <div className='px-3 py-3 ml-2'>
//                   <input type="file" onChange={handleProfileImageChange} />
//                   <button onClick={setProfileData((prevState) => ({ ...prevState, selectedFile: newselectedFile }))}
//                   className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Upload Image</button>
//                 </div>
//                 <div className='px-3 py-3 ml-2'>
//                   <input type="file" onChange={handleResumeChange} />
//                   <button onClick={setProfileData((prevState) => ({ ...prevState, resume:newresume })) }
//                   className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Upload Your Resume</button>
//                 </div>
//                 <div className='px-3 py-3 ml-2'>
//                   <textarea value={newdescription} onChange={(e) => setDescription(e.target.value)} />
//                   <button onClick={setProfileData((prevState) => ({ ...prevState, description:newdescription }))}
//                   className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'>Update Description</button>
//                 </div>
                

//                 <button
//                   onClick={handleSaveProfile}
//                   className='px-3 py-1 ml-2 text-white bg-green-500 rounded-md'
//                 >
//                   Save Profile
//                 </button>
//         </div>
//     )
// }

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
    skills: [],
    jobs: [],
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
      {/* <label className="block mb-2 text-lg font-bold">Skills:</label>
      {skills.map((skill, index) => (
        <div key={index} value={skill} className="flex items-center mb-2">
          {skill}
          <button
            className="ml-2 text-red-500"
            onClick={() => handleRemoveSkill(index)}
          >
            Remove
          </button>
        </div>
      ))} */}
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
        {newJob.map((job, index) => (
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

