import SignUp from "../sign-up/sign-up.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import './login.scss';




const Login = () => {
    
    
    return (

        <div className="loginContainer">
            <SignIn/>
           
            <SignUp/>
        </div>
       
    );
};
export default Login;