import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA77NS8hTvS-kDDxBWPLVgDR5cv0gwwang",
    authDomain: "udemy2react.firebaseapp.com",
    projectId: "udemy2react",
    storageBucket: "udemy2react.appspot.com",
    messagingSenderId: "384103265335",
    appId: "1:384103265335:web:ff1a2af5117293bb1c3bb2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Google Sign
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});

  //DB
  const firebaseApp = initializeApp(firebaseConfig);

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
  
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date;
        try {
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation});
        } catch (error) {
            console.log('sign up error', error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
};


  // Export
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
  export const db = getFirestore();
