import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpe2iRusHwCBG1SOLcLfvc0GTy-MOtOaE",
  authDomain: "licenta-35e28.firebaseapp.com",
  projectId: "licenta-35e28",
  storageBucket: "licenta-35e28.appspot.com",
  messagingSenderId: "285239067273",
  appId: "1:285239067273:web:dcbd0841559b277fc13c58"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);


  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, aditionalInformation={}) => {
    const userDocRef = doc(db, 'users', userAuth.uid); //doc(database,collection,unique id)


    const userSnapshot = await getDoc(userDocRef); //snapshot ne ajuta sa accesam datele si sa verificam daca ele exista
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...aditionalInformation
        });
      }catch (error){
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email,password) =>{
  
    if(!email || !password) return;  
    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = () => signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);