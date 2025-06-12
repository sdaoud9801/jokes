import './JokeFeed.css';
import Joke from '../Joke/Joke.js';
import sortJokes from './sortJokes.js';
import { useState } from 'react'

const JokeFeed = ({jokes,setJokes}) => {
    const [sortBy,setSortBy] = useState("newest");
    let sortedJokes = sortJokes(jokes,sortBy);
    function editJokesArray(editedJoke){
        let newJokes = jokes.map((joke)=>{
            if(joke.joke_id === editedJoke.joke_id){
                return editedJoke
            } else {
                return joke
            }
        });
        setJokes(newJokes)
    }
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
                        return <Joke joke={joke} editJokesArray={editJokesArray} key={joke.id} />
                    })
                ): ("Loading") }
            </div>
        </div>
    )
}

export default JokeFeed;