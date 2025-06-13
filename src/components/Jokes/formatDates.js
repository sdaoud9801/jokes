export default function formatDates(jokes){
    if(!jokes) {
        return
    }
    let formattedJokes = jokes.map((joke)=>{
        let dateTime = joke.post_time;
        let [date,time] = dateTime.split("T");
        time = time.slice(0,5);
        let newDateTime = time + " | " + date;
        return {...joke, post_time: newDateTime};
    })
    return formattedJokes;
}