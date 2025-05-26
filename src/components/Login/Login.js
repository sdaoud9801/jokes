import './Login.css';
const Login = ({setPage}) => {
    return (
        <div className="form__container">
            <form>
                <div className="form__header-container">
                    <h2>Login</h2>
                </div>
                <div className="form__field">
                    <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='eg ultimateIce' id="username" required></input>
                </div>
                <div className="form__field">
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='******' id="password" required></input>
                </div>
                <input type="submit" value="SUBMIT" className="form__submit"></input>
                <p className="sign-up">
                    Don't have an account? <span className='clickable' onClick={()=>{setPage("signup")}}>Sign up</span>
                </p>
            </form>
        </div>
    )
}

export default Login;