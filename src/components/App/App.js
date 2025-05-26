import './App.css';
import Nav from '../Nav/Nav.js';
import Login from '../Login/Login.js';
import Signup from '../Signup/Singup.js';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState("login");
  if (page === "login") {
    return (
      <div className="App">
        <Nav />
        <Login setPage={setPage} />
      </div>
    );
  } else if (page === "signup") {
      return(
      <div className="App">
        <Nav />
        <Signup />
      </div>
      )
  }

}

export default App;
