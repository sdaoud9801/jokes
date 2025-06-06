async function postJoke(content) {
    let response = await fetch("http://localhost:5000/jokes/createjoke", {
        method: "post",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: content
        })
    });
    response = await response.json();
    return response;
};

export default postJoke;