import './JokeFeed.css';
import Joke from '../Joke/Joke.js';

const JokeFeed = () => {
    return (
        <div className="jokes-feed">
            <div className="jokes-feed__header">JOKES</div>  
            <div className="jokes-feed__sort">
                Sort by
                <select name="sortby" id="sort">
                    <option value="Newest">newest</option>
                    <option value="most-popular">most popular</option>
                </select>
            </div>
            <div className="jokes">
                <Joke />
                <Joke />
            </div>
             
        </div>
    )
}

export default JokeFeed;