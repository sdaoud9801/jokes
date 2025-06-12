export default function sortJokes(jokes, sortBy) {
    if (jokes) {
        if (sortBy === "newest") {
            return sortByNewest(jokes);
        } else {
            return sortByMostPopular(jokes);
        }
    } else {
    }
};

function sortByNewest(jokes) {
    let jokesIds = jokes.map((joke) => {
        return joke.joke_id;
    });
    jokesIds.sort((a, b) => b - a);
    let sortedJokes = jokesIds.map((id) => {
        return jokes.find((joke) => joke.joke_id === id);
    });
    return sortedJokes;
}

function sortByMostPopular(jokes) {
    jokes.sort((a,b) => b.likes - a.likes);
    console.log(jokes);
    return jokes;
}