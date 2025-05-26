function validate(email, username,password,confirmPassword) {
        let emailValid;
        let usernameValid;
        let passwordValid;
        let confirmPasswordValid;

        if (email.includes("@") && (email.charAt(email.indexOf("@") + 1) !== "")) {
            emailValid = true;
        } else {
            emailValid = false;
        }
        if (username.length > 4 && username.length < 12) {
            usernameValid = true;
        } else {
            usernameValid = false;
        }

        if (password.length > 8 && password.length < 12) {
            passwordValid = true;
        } else {
            passwordValid = false;
        }

        if (confirmPassword === password) {
            confirmPasswordValid = true;
        } else {
            confirmPasswordValid = false;
        };

        return {
            emailValid,
            usernameValid,
            passwordValid,
            confirmPasswordValid
        }
    }

export default validate;