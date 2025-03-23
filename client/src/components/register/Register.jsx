import { useRegister } from "../../api/authAPI";
import {  useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

export default function Register() {

    const navigate = useNavigate();
    const {register} = useRegister();   
    const {useLoginHandler} = useUserContext();

    const registerHandler = async(formdata) =>{
        const {email, password} =Object.fromEntries(formdata);

        const confirmPassword = formdata.get('confirm-password')

        if(password !== confirmPassword){
            console.log('Password mismatch!');

            return;
        }
        const authtData = await register(email, password);

        useLoginHandler(authtData);
        navigate('/');
    }

    return(
        <section id="register-page" className="content auth">
        <form id="register" action={registerHandler}>
            <div className="container">
                <div className="brand-logo"></div>
                <h1>Register</h1>
    
                <label or="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com"/>
    
                <label or="pass">Password:</label>
                <input type="password" name="password" id="register-password"/>
    
                <label or="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password"/>
    
                <input className="btn submit" type="submit" value="Register"/>
    
                <p className="field">
                    <span>If you already have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
    )
}