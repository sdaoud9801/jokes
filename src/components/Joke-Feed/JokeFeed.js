import './JokeFeed.css';
import Joke from '../Joke/Joke.js';
import sortJokes from './sortJokes.js';
import { useState } from 'react'

const JokeFeed = ({jokes}) => {
    const [sortBy,setSortBy] = useState("newest");
    let sortedJokes = sortJokes(jokes,sortBy);
    console.log("sortedJokes",jokes);
    return (
        <div className="jokes-feed">
            <div className="jokes-feed__header">JOKES</div>
            <div className="jokes-feed__sort">
                Sort by
                <select name="sortby" id="sort" onChange={(e)=>{setSortBy(e.target.value)}}>
                    <option value="newest">newest</option>
                    <option value="most-popular">most popular</option>
                </select>
            </div>
            <div className="jokes">
                {sortedJokes ? (
                    sortedJokes.map((joke)=>{
                        return <Joke joke={joke} />
                    })
                ): ("Loading") }
            </div>

        </div>
    )
}

export default JokeFeed;