import React, { useState } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [userInput, setUserInput] = useState("");
  const [userTodo, setUserTodo] = useState([]);
  // const [userSignedIn, setUserSignedIn] = useState(false);

 
  return (
    <div className="App">
    {/* use success state of api to show different views */}
    <Router>
      <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/users">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
