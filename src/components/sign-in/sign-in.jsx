import { useState } from "react";
import { signInAuthUserWithEmailAndPassword,  signInWithGooglePopup, createUserDocumentFromAuth } from "../../firebase/firebase.utilities.jsx";
import FormInput from "../form-input/form-input.jsx";
import './sign-in.scss';
import Button from "../button/button.jsx";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {
   
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const refreshSubmit = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            refreshSubmit();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('wrong password');
                    break;
                case 'auth/invalid-user-credentials':
                    alert('Account do not exist');
                    break;
                default:
            console.log('error',error);
            }
        }
    };

    

    return (
        <div className="signIn">
            <h2 className="signIn_title">Already have an account</h2>
            <form className="signIn_form" onSubmit={handleSubmit}>
               <FormInput label='E-mail' type="email" required onChange={handleChange} name="email" value={email} /> 
               <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} /> 
               <div className="signIn_form_buttonContainer"> 
                    <Button buttonType='inverted' type="submit">Sign In</Button>
                    <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
};

export default SignIn;