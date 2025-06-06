import './Login.css';
import postLogin from './PostLogin.js';
import validateInputs from './validateInputs.js';
import { useState } from 'react';
const Login = ({setPage}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    async function submit(e) {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        let inputsValid = validateInputs(username,password);
        if(!inputsValid) {
            setError({
                message: "Invalid username or password"
            });
            return
        } else {
            setIsLoading(true);
            let {status, message} = await postLogin(username,password);
            setIsLoading(false);
            if(status === "success"){
                setSuccess(true);
                setTimeout(()=>{
                    setPage("jokes")
                },1000)
            } else {
                setError({
                    message
                })
            };
        }
    };
    return (
        <div className="form__container">
            <form>
                <div className="form__header-container">
                    <h2>Login</h2>
                </div>
                <div className="form__field">
                    <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='eg ultimateIce' id="username" onChange={(e)=>{setUsername(e.target.value)}} required></input>
                </div>
                <div className="form__field">
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='******' id="password" onChange={(e)=>{setPassword(e.target.value)}} required></input>
                </div>
                <input type="submit" value="SUBMIT" className="form__submit" onClick={(e)=>{submit(e)}}></input>
                <div className={isLoading ? "loading message" : "hide"}>
                    Logging you in<div className="loader"></div>
                </div>
                <div className={success ? "success message" : "hide"}>
                    Successfully logged in!
                </div>
                <div className={error ? "error message" : "hide"}>
                    Error: {error.message}
                </div>
                <p className="sign-up">
                    Don't have an account? <span className='clickable' onClick={()=>{setPage("signup")}}>Sign up</span>
                </p>
            </form>
        </div>
    )
}

export default Login;