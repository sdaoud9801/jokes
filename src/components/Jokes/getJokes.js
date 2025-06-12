async function getJokes(){
    let response = await fetch("http://localhost:5000/jokes",{
        credentials: "include"
    });
    response = await response.json();
    console.log(response);
    return response
}

export default getJokes;