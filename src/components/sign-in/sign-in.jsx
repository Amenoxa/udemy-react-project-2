import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../firebase/firebase.utilities.jsx";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    );
};
export default SignIn;