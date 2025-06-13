async function postDetails(username, password, email) {
    let response = await fetch("https://jokes-server-2xec.onrender.com/auth/createuser", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
            email
        })
    });
    response = await response.json();
    return response;
}
export default postDetails;