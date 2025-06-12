import './Joke.css';
import { useState } from 'react';

const Joke = ({ joke, editJokesArray }) => {
    let [isLoading, setIsLoading] = useState(false);
    if (!joke.likes) {
        joke.likes = 0;
    }
    async function like() {
        setIsLoading(true);
        let response = await fetch("http://localhost:5000/jokes/like", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                joke_id: joke.joke_id
            })
        });
        response = await response.json();
        if (response.status === "success") {
            // setIsLiked(true);
            let editedJoke = { ...joke, liked: true, likes: joke.liked ? joke.likes + 1 : 1 };
            editJokesArray(editedJoke);
        } else {
            console.log("failure");
        }
        setIsLoading(false);
    }
    async function unlike() {
        setIsLoading(true);
        let response = await fetch("http://localhost:5000/jokes/unlike", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                joke_id: joke.joke_id
            })
        });
        response = await response.json();
        if (response.status === "success") {
            let editedJoke = { ...joke, liked: false, likes: joke.likes - 1};
            editJokesArray(editedJoke);
            joke.likes--;
        } else if (response.status === "failure") {
            console.log(response.message);
        }
        setIsLoading(false);
    }
    return (
        <div className="joke" key={joke.joke_id}>
            <div className="joke__header">{joke.username}</div>
            <div className="joke__content">{joke.content}</div>
            <div className="joke__interact">
                <button
                    className={
                        joke.liked ?
                            ('liked') : ""
                    }
                    onClick={joke.liked ? unlike : like}
                >
                    {isLoading ?
                        (<div className="loader"></div>) :
                        ("Laugh😂 (" + joke.likes + ")")
                    }
                </button>
                <div className="joke__date">
                    {joke.post_time}
                </div>
            </div>
        </div>
    )
};

export default Joke;