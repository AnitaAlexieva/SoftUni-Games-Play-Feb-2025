import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authAPI";
import { UserContext } from "../../contexts/UserContext";


export default function Login() {
    const navigate = useNavigate();
    const {useLoginHandler} = useContext(UserContext)
    const {login} = useLogin();;

    const loginHandler =async (_,formdata) =>{
           
        const values = Object.fromEntries(formdata);

        const authData = await login(values.email, values.password);
        
        useLoginHandler(authData);

        navigate('/games');
        
        return values;
    }

    const [_, loginAction, isPending] = useActionState(loginHandler, {emails: '', password:''})
    


    return(
        <section id="login-page" className="auth">
        <form id="login" action={loginAction}>
    
            <div className="container">
                <div className="brand-logo"></div>
                <h1>Login</h1>
                <label or="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com"/>
    
                <label or="login-pass">Password:</label>
                <input type="password" id="login-password" name="password"/>
                <input type="submit" className="btn submit" value="Login" disabled={isPending}/>
                <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </div>
        </form>
        </section>
    )
}