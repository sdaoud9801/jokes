async function postDetails(username, password, email) {
    let response = await fetch("http://localhost:5000", {
        method: "post",
        body: {
            username,
            password,
            email
        }
    });
    response = await response.json();
    return response;
}
postDetails("salabongo","saladino12","sdaoud980@gmail.com");
export default postDetails