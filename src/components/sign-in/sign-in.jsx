import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from "../../firebase/firebase.utilities.jsx";
import SignUp from "../sign-up/sign-up.jsx";

const SignIn = () => {
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUp/>
        </div>
    );
};
export default SignIn;