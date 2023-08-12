import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

} from 'firebase/auth';
import { getFirestore, doc, getDoc, addDoc, setDoc, collection, writeBatch, query, getDocs, updateDoc,where, QuerySnapshot  } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCpe2iRusHwCBG1SOLcLfvc0GTy-MOtOaE",
  authDomain: "licenta-35e28.firebaseapp.com",
  projectId: "licenta-35e28",
  storageBucket: "licenta-35e28.appspot.com",
  messagingSenderId: "285239067273",
  appId: "1:285239067273:web:dcbd0841559b277fc13c58"
  };
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);
  
  export const db = getFirestore();
  
  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
  
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  } 
  
  export const getDocuments = async () => {
    const collectionRef = collection(db, "SAS_Events");
    const querySnapshot = await getDocs(collectionRef);
  
    if (!querySnapshot || !querySnapshot.docs) {
      console.error("No documents found in the collection.");
      return {};
    }
  
    const eventsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { eventName, description, startDate, image, join, terms } = docSnapshot.data();
      const event = {
        eventName,
        description,
        startDate,
        image,
        join,
        terms
      };
      acc[docSnapshot.id] = event;
      return acc;
    }, {});
  
    return eventsMap;
  };
  
  
  export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      console.log(userAuth);
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          phoneNumber: additionalInformation.phoneNumber || '',
          birthDate: additionalInformation.birthDate || null,
          mainOccupation: additionalInformation.mainOcupation || 'Your occupation',
          skills: additionalInformation.skill || [],
          description: additionalInformation.description || '',
          profileImage: additionalInformation.profileImage || null,
          gitHubLink: additionalInformation.gitHubLink || null,
          linkedinLink : additionalInformation.linkedinLink || null,
          instagramLink : additionalInformation.instagramLink || null,
          resume : additionalInformation.resume || null,
          location : additionalInformation.location || null,
          jobs : additionalInformation.job || [],
          faculty: additionalInformation.faculty || null,
          languages : additionalInformation.languages || null,
          department : additionalInformation.department || null,
          role: additionalInformation.role || null,
          sasMember: additionalInformation.sasMember || null,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };

  export const getUserData = async (userId) => {

    const userDocRef = doc(db, 'users', userId.uid);
    const q = query(userDocRef);
  
    const docSnap = await getDoc(q);
    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
      return docSnap.data();
      
    } else {
      console.log('No such document!');
      return null; // Return null or handle the case when the document doesn't exist
    }
  };

  export const createEventDoc = async(eventData) =>{
  const collectionRef = collection(db, "SAS_Events");
  await addDoc(collectionRef, eventData);
  }

  export const uploadEventImage = async(image) => {
  
  if (image) {
    try {
      const storageRef = getStorage();
      const storageChildRef = ref(storageRef, `events/${image.name}`);

      await uploadBytes(storageChildRef, image);
      const downloadURL = await getDownloadURL(storageChildRef);
      return downloadURL;
    } catch (error) {
      console.log('Error uploading image:', error.message);
    }
  }
  }
  export const uploadEventTerms = async(terms) => {
  
    if (terms) {
      try {
        const storageRef = getStorage();
        const storageChildRef = ref(storageRef, `events/${terms.name}`);
  
        await uploadBytes(storageChildRef, terms);
        const downloadURL = await getDownloadURL(storageChildRef);
        return downloadURL;
      } catch (error) {
        console.log('Error uploading terms:', error.message);
      }
    }
    }

  export const updateProfile = async (
    userId,
    newPhoneNumber,
    newBirthDate,
    newDisplayName,
    newMainOccupation,
    newDescription,
    newGitHubLink,
    newLinkedinLink,
    newInstagramLink,
    newLocation,
    newSkill,
    newJob,
    newFaculty,
    newLanguage,
    newDepartment,
    newRole,
    newSasMember,
  ) => {
    const userDocRef = doc(db, 'users', userId.uid);
    const userData = (await getDoc(userDocRef)).data();
  
    // Create an object to store the updated profile data
    const updatedProfileData = {};
  
    console.log(newSasMember);
    // Compare and add changed data to updatedProfileData
    if (newLocation && (newLocation !== userData.location)) {
      updatedProfileData.location = newLocation;
    }
    if (newPhoneNumber && newPhoneNumber !== userData.phoneNumber) {
      updatedProfileData.phoneNumber = newPhoneNumber;
    }
    if (newBirthDate && newBirthDate !== userData.birthDate) {
      updatedProfileData.birthDate = newBirthDate;
    }
    if (newDisplayName && newDisplayName !== userData.displayName) {
      updatedProfileData.displayName = newDisplayName;
    }
    if (newMainOccupation && newMainOccupation !== userData.mainOccupation) {
      updatedProfileData.mainOccupation = newMainOccupation;
    }
    if (newDescription && newDescription !== userData.description) {
      updatedProfileData.description = newDescription;
    }
    if (newGitHubLink && newGitHubLink !== userData.gitHubLink) {
      updatedProfileData.gitHubLink = newGitHubLink;
    }
    if (newLinkedinLink && newLinkedinLink !== userData.linkedinLink) {
      updatedProfileData.linkedinLink = newLinkedinLink;
    }
    if (newInstagramLink && newInstagramLink !== userData.instagramLink) {
      updatedProfileData.instagramLink = newInstagramLink;
    }
    if (newFaculty && newFaculty !== userData.faculty) {
      updatedProfileData.faculty = newFaculty;
    }
    if (newLanguage && newLanguage !== userData.languages) {
      updatedProfileData.languages = newLanguage;
    }
    if (newDepartment && newDepartment !== userData.department) {
      updatedProfileData.department = newDepartment;
    }
    if (newRole && newRole !== userData.role) {
      updatedProfileData.role = newRole;
    }
    if (newSasMember && newSasMember !== userData.sasMember) {
      updatedProfileData.sasMember = newSasMember;
    }
  
    if (Array.isArray(newSkill) && newSkill.length > 0) {
      updatedProfileData.skills = newSkill;
    }
    if (Array.isArray(newJob) && newJob.length > 0) {
      updatedProfileData.jobs = newJob;
    }
  
    // Only update the profile if there are changes
    if (Object.keys(updatedProfileData).length > 0) {
      try {
        await updateDoc(userDocRef, updatedProfileData);
        console.log('User profile updated successfully');
      } catch (error) {
        console.log('Error updating user profile:', error.message);
      }
    }
  };

 
  const getImageNameFromURL = (file) => {
    const fileName = file.substring(
      file.lastIndexOf('/') + 1,
      file.indexOf('?') !== -1 ? file.indexOf('?') : undefined
    );
    return fileName;
  };
  

  export const UploadImage = async (selectedFile,userId) => {
    const userDocRef = doc(db, 'users', userId.uid);
    if(selectedFile) {
      try{
      const storageRef = getStorage();
      const fileRef = ref(storageRef,selectedFile.name);

      const docSnap = await getDoc(userDocRef);
      const oldImageURL = docSnap.data()?.profileImage;
      if (oldImageURL) {
        const oldImageRef = ref(storageRef, getImageNameFromURL(oldImageURL));
        await deleteObject(oldImageRef);
      }

      await uploadBytes(fileRef,selectedFile);
      const downloadURL = await getDownloadURL(fileRef);
     
      await updateDoc(userDocRef,{
          profileImage: downloadURL,
        });
        
      return downloadURL;
      }
      catch(error) {
        console.log('Error uploading image:' , error.message);
      };
    }
  }


  const getFileNameFromURL = (url) => {
    const startIndex = url.indexOf('resumes%2F') + 'resumes%2F'.length;
    //const startIndex = url.lastIndexOf('/') + 1;
    const endIndex = url.indexOf('?');
    let fileName = url.substring(startIndex, endIndex);
    fileName = decodeURIComponent(fileName); // Decode the URL-encoded file name
    //fileName = fileName.replace('resumes%2F', 'resumes/'); // Remove 'resumes%2F' from the file name
    return fileName;
  };
  
  
  export const UploadResume = async (newResume,userId) => {
    const userDocRef = doc(db, 'users', userId.uid);
    console.log(newResume);
    if(newResume) {
      try{
      const storageRef = getStorage();
      const storageChildRef = ref(storageRef, `resumes/${newResume.name}`);

      const docSnap = await getDoc(userDocRef);
      const oldResumeURL = docSnap.data()?.resume;
      if (oldResumeURL && !oldResumeURL.includes('undefined')) {
        const oldResumeFileName = getFileNameFromURL(oldResumeURL);
        const oldResumeRef = ref(storageRef, `resumes/${oldResumeFileName}`);
        await deleteObject(oldResumeRef);
      }

      await uploadBytes(storageChildRef,newResume);
      const downloadURL = await getDownloadURL(storageChildRef);
     
      await updateDoc(userDocRef,{
          resume: downloadURL,
        });
        
      return downloadURL;
      }
      catch(error) {
        console.log('Error uploading image:' , error.message);
      };
    }
  }
  
  export const fetchUsers = async () => {
    try {
      const usersCollection = collection(db, 'users');
      const querySnapshot = await getDocs(usersCollection);
      const userData = querySnapshot.docs.map((doc) => doc.data());
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

  export const fetchUserData = async (displayName) => {
    try {
      const db = getFirestore();
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('displayName', '==', displayName));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return userDoc.data();
      } else {
        return null;
        // Handle case when user is not found
      }
    } catch (error) {
      console.log('Error fetching user data:', error);
      // Handle error
      throw error;
    }
  };


  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  
  export const signOutUser = () => signOut(auth);
  
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);