import React, { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

function App() {
  const [userInput, setUserInput] = useState("");
  const [userTodo, setUserTodo] = useState([]);
  const [sendTodoSuccess, setSendTodoSuccess] = useState("");
  const [getTodoSuccess, setGetTodoSuccess] = useState("");
  const [userSignedIn, setUserSignedIn] = useState(false);

  const fetchData = async () => {
    try {

        const response = await fetch('http://localhost:3001/api/', {
          method: "GET",
          "Content-Type": "application/x-www-form-urlencoded"
        });

        if(!response.ok) {
          const data = await response.json();

          if(!data.success) {
            setGetTodoSuccess(false);
            return setUserTodo([]);
          } else {
            setGetTodoSuccess(true)
            return setUserTodo(null);
          }

        } else {
          const data = await response.json();
          setGetTodoSuccess(true);
          return setUserTodo(data.data);

        };
    } catch (err) {

      setGetTodoSuccess(false);
      console.log(err, "here");

    }
  }

  const sendTodo = async () => {
    try {
      var headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("todo", `${userInput}`);

      var requestOptions = {
          method: 'POST',
          headers: headers,
          body: urlencoded,
          redirect: 'follow'
      };

      const response = await fetch("http://localhost:3001/api/", requestOptions);
      if(!response.ok) return setSendTodoSuccess(false);
      const data = await response.json();
      if(data.success === true) {
        return setSendTodoSuccess(true);
      } else {
        return setSendTodoSuccess(false)
      }
    } catch(err) {
      return setSendTodoSuccess(false);
    }
  }

// fetches data on component load, then everytime userTodo updates (on form submit), will refetch data

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleCreateSubmit = (e) => {
      e.preventDefault();
      sendTodo();
      resetInput();
  }

  const resetInput = () => {
    setUserInput("");
  }

  return (
    <div className="App">
    {/* use success state of api to show different views */}
      <Main userTodo={userTodo}
        handleChange={handleChange}
        fetchData={fetchData}
        userInput={userInput}
        userSignedIn={userSignedIn}
        handleCreateSubmit={handleCreateSubmit}
        getTodoSuccess={getTodoSuccess}
      />
    </div>
  );
}

export default App;
