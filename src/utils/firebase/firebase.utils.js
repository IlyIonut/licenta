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
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, updateDoc  } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { get, onValue } from 'firebase/database';

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
  
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
      const {title,items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  } 
  
  
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
          birthDate: additionalInformation.birthDate || null,
          skills: additionalInformation.skills || [],
          description: additionalInformation.description || '',
          profileImage: additionalInformation.profileImage || null,
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
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  export const updateUserBirthDate = async (userId, newBirthDate) => {
    const userDocRef = doc(db, 'users', userId.uid);
  
    try {
      await updateDoc(userDocRef, {
        birthDate: newBirthDate,
      });
      console.log('User birth date updated successfully');
    } catch (error) {
      console.log('Error updating user birth date:', error.message);
    }
  };

  export const handleUploadImage = async (selectedFile,userId) => {
    const userDocRef = doc(db, 'users', userId.uid);
    if(selectedFile) {
      try{
      const storageRef = getStorage();
      const fileRef = ref(storageRef,selectedFile.name)
      await uploadBytes(fileRef,selectedFile);
      const downloadURL = await getDownloadURL(fileRef);
     
      await updateDoc(userDocRef,{
          profileImage: downloadURL,
        });
      console.log('User profil images updated successfully');
      }
      catch(error) {
        console.log('Error uploading image:' , error.message);
      };
    }
  }
  
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