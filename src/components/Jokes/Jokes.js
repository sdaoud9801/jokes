import './Jokes.css';
import JokeForm from '../Joke-Form/JokeForm.js';
import JokeFeed from '../Joke-Feed/JokeFeed.js';
import getJokes from './getJokes.js';
import { useState } from 'react';

const Jokes = ({setPage}) => {
    const [jokes, setJokes] = useState(false);
    async function updateJokes(){
        let response = await getJokes();
        setJokes(response.jokes);
    };
    if (!jokes) {
        updateJokes();
    };
    return (
        <div className="jokes-container">
            <div className="main-feed">
                <JokeForm setPage={setPage} updateJokes={updateJokes} />
                <JokeFeed setPage={setPage} jokes={jokes}  />
            </div>
        </div>
    )
};

export default Jokes;