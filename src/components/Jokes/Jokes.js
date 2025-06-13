import './Jokes.css';
import JokeForm from '../Joke-Form/JokeForm.js';
import JokeFeed from '../Joke-Feed/JokeFeed.js';
import getJokes from './getJokes.js';
import formatDates from './formatDates.js';
import { useState, useEffect } from 'react';

const Jokes = ({ setPage, user }) => {
    const [jokes, setJokes] = useState(false);
    console.log("username:",user);
    useEffect(()=>{
        updateJokes()
        console.log("ran update jokes");
    },[user])
    async function updateJokes() {
        try {
            let response = await getJokes();
            let { jokes } = response;
            let formattedJokes = formatDates(jokes);
            setJokes(formattedJokes);
        } catch (e) {
            console.log(e)
        }
    };
    return (
        <div className="jokes-container">
            <div className="main-feed">
                <JokeForm setPage={setPage} updateJokes={updateJokes} />
                <JokeFeed setPage={setPage} jokes={jokes} setJokes={setJokes} />
            </div>
        </div>
    )
};

export default Jokes;