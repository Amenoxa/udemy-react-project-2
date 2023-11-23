import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../firebase/firebase.utilities.jsx";
import FormInput from "../form-input/form-input.jsx";
import './sign-up.scss';
import Button from "../button/button.jsx";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
   
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const refreshSubmit = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user,{displayName});
            refreshSubmit();
        }
        catch (error) {
            console.log('error',error);
        }
    };

    return(
        <div className="signUp">
            <h2 className="signUp_title">Don't have account? Sign up</h2>
            <form className="signUp_form" onSubmit={handleSubmit}>
               <FormInput label='Nickname' type="text" required onChange={handleChange} name="displayName" value={displayName} /> 
               <FormInput label='E-mail' type="email" required onChange={handleChange} name="email" value={email} /> 
               <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} /> 
               <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} /> 
               <Button buttonType='inverted' type="submit">Sign Up</Button>
            </form>
        </div>
    )
};

export default SignUp;