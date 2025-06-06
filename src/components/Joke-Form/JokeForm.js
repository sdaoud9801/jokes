import { useState } from 'react';
import './JokeForm.css';
import postJoke from './postJoke.js';
const JokeForm = ({setPage,updateJokes}) => {
    const [jokeInput, setJokeInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    async function submit(e){
        e.preventDefault();
        setSuccess(false);
        setError(false);
        setIsLoading(true);
        let response = await postJoke(jokeInput);
        setIsLoading(false);
        setJokeInput('');
        if (response) {
            if (response.status === "success") {
                setSuccess(true)
            } else {
                setError(true);
            }
        } else {
            console.log("no response?")
        }
        updateJokes();
    };
    return (
        <form className="joke-form">
            <textarea onChange={e => { setJokeInput(e.target.value) }} placeholder='Got a joke?' value={jokeInput}></textarea>
            <input type="submit" value="POST" onClick={(e)=>{submit(e)}}></input>
            <div className={isLoading ? "loading message" : "hide"}>
                Sharing your joke<div className="loader"></div>
            </div>
            <div className={success ? "success message" : "hide"}>
                Your joke is out there!
            </div>
            <div className={error ? "error message" : "hide"}>
                Error creating joke
            </div>
        </form>
    )
}

export default JokeForm;