async function postLogin(username,password){
    let response = await fetch("https://jokes-server-2xec.onrender.com/auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username,
                password
            })
        }
    )
    response = await response.json();
    return response;
}

export default postLogin;