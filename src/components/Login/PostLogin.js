async function postLogin(username,password){
    let response = await fetch("http://localhost:5000/auth/login", {
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