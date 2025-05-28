import './Jokes.css';
import JokeForm from '../Joke-Form/JokeForm.js';
import JokeFeed from '../Joke-Feed/JokeFeed.js';

const Jokes = () => {
    return (
        <div className="jokes-container">
            <div className="main-feed">
                <JokeForm />
                <JokeFeed />
            </div>
        </div>
    )
};

export default Jokes;