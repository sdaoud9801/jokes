import { useState } from 'react';
import './JokeForm.css';
const JokeForm = () => {
    const [jokeInput,setJokeInput] = useState('');
    console.log(jokeInput); 
    return (
    <form className="joke-form">
        <textarea onChange={e=>{setJokeInput(e.target.value)}} placeholder='Got a joke?'></textarea>
        <input type="submit" value="POST"></input>
    </form>
    )
}

export default JokeForm;