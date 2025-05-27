function validateInputs(username,password) {
    let usernameValid;
    let passwordValid;
    if((username.length > 4)&&(username.length < 12)) {
        usernameValid = true;
    } else {
        usernameValid = false;
    }
    if((password.length > 8) && (password.length < 12)) {
        passwordValid = true;
    } else {
        passwordValid = false;
    }
    return usernameValid && passwordValid;
}

export default validateInputs;