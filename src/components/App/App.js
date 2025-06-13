import './App.css';
import Nav from '../Nav/Nav.js';
import Login from '../Login/Login.js';
import Signup from '../Signup/Singup.js';
import Jokes from '../Jokes/Jokes.js';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null)

  if (page === "login") {
    return (
      <div className="App">
        <Nav />
        <Login setPage={setPage} setUser={setUser} />
      </div>
    );
  } else if (page === "signup") {
      return(
      <div className="App">
        <Nav />
        <Signup setPage={setPage} />
      </div>
      )
  } else if (page === "jokes") {
    return (
      <div className="App">
        <Nav />
        <Jokes setPage={setPage} user={user} />
      </div>
    )
  }
}

export default App;