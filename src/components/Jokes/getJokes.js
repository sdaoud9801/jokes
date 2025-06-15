async function getJokes(){
    let response = await fetch("https://jokes-server-2xec.onrender.com/jokes",{
        credentials: "include"
    });
    response = await response.json();
    return response
}

export default getJokes;