import './Login.css';
const Login = () => {
    return (
        <div className="form__container">
            <form>
                <div className="form__header-container">
                    <h2>Login</h2>
                </div>
                <div className="form__field">
                    <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='eg ultimateIce' id="username"></input>
                </div>
                <div className="form__field">
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='******' id="password"></input>
                </div>
                <input type="submit" value="SUBMIT" id="submit"></input>
            </form>
        </div>
    )
}

export default Login;