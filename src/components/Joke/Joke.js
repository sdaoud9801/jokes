import './Joke.css';

const Joke = ({joke}) => {
    joke.liked = true;
    return (
        <div className="joke">
            <div className="joke__header">{joke.username}</div>
            <div className="joke__content">{joke.content}</div>
            <div className="joke__interact">
                <button className={joke.liked ? ('liked') : ""}>Laugh😂 ({joke.likes}) </button>
                <div className="joke__date">
                    Posted on {joke.time}
                </div>
            </div>
        </div>
    )
};  

export default Joke;