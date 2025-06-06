import { useState } from 'react';
import validate from './validate.js';
import postDetails from './postDetails.js';
import './Signup.css';

const Signup = ({setPage}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);  

    let { emailValid, usernameValid, passwordValid, confirmPasswordValid } = validate(email, username, password, confirmPassword);
    let allValid = emailValid && usernameValid && passwordValid && confirmPasswordValid;

    async function submit(e) {
        e.preventDefault();
        setSuccess(false);
        setError(false);
        if (allValid) {
            setIsLoading(true);
            try {
                let response = await postDetails(username, password, email);
                setIsLoading(false);
                if(response.status === "success") {
                    setSuccess(true);
                    setTimeout(()=>{
                        setPage('login');
                    },2000);
                } else {
                    setError({
                        message: response.error
                    });
                }
            } catch (e) {
                setIsLoading(false);
                setError({
                    message: e.message
                })
            }
            
        } else {
            setIsLoading(false)
            setError({
                message: "Invalid sign up details"
            });
        }
    }

    return (
        <div className="form__container">
            <form>
                <div className="form__header-container">
                    <h2>Sign up</h2>
                </div>
                <div className="form__field">
                    <label htmlFor='email'>Email</label>
                    <input type="email" placeholder='eg ultimateIce2004@gmail.com' id="email" className={emailValid ? ('valid') : ('invalid')} onChange={(e) => { setEmail(e.target.value); }} required></input>
                </div>
                <div className="form__field">
                    <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='eg ultimateIce' id="username" className={usernameValid ? ('valid') : ('invalid')} onChange={(e) => { setUsername(e.target.value) }} required></input>
                    <div className={usernameValid ? ("hide") : ("field__error")}>X username must be between 4 and 12 characters</div>
                </div>
                <div className="form__field">
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='******' id="password" className={passwordValid ? ('valid') : ('invalid')} onChange={(e) => { setPassword(e.target.value) }} required></input>
                    <div className={passwordValid ? ("hide") : ("field__error")}>X password must be between 8 and 12 characters</div>
                </div>
                <div className="form__field">
                    <label htmlFor='confirm-password'>Confirm password</label>
                    <input type="password" placeholder='******' id="confirm-password" className={confirmPasswordValid ? ('valid') : ('invalid')} onChange={(e) => { setConfirmPassword(e.target.value) }} required></input>
                    <div className={confirmPasswordValid ? ("hide") : ("field__error")}>Passwords must match</div>
                </div>
                <input type="" value="SUBMIT" className="form__submit" onClick={(e) => { submit(e) }}></input>
                <div className={isLoading ? "loading message" : "hide"}>
                    Creating your account <div className="loader"></div>
                </div>
                <div className={success ? "success message" : "hide"}>
                    Account created! Redirecting to login
                </div>
                <div className={error ? "error message" : "hide"}>
                    Error: {error.message}
                </div>
            </form>
        </div>
    )
}

export default Signup;