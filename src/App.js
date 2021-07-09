import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  const [userInput, setUserInput] = useState("");
  const [userTodo, setUserTodo] = useState([]);
  const [todoSuccess, setTodoSuccess] = useState("");
  const [userSignedIn, setUserSignedIn] = useState(false);


  const fetchData = async () => {
    try {

        const response = await fetch('http://localhost:3001/api/', {
          method: "GET",
          "Content-Type": "application/x-www-form-urlencoded"
        })
        if(!response.ok) {
          const data = await response.json();
          if(!data.success) {
            return setUserTodo([])
          } else {
            return setUserTodo(null);
          }
        } else {
          const data = await response.json();
          return setUserTodo(data.data);
        };
    } catch (err) {
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
      if(!response.ok) return;
      const data = await response.json();
      if(data.success == true) {
        setTodoSuccess(true);
      }
      
    } catch(err) {
      throw new Error(err, "Here");
    }
  }

// fetches data on component load, then everytime userTodo updates (on form submit), will refetch data
  useEffect(() => {
    return fetchData();
  }, [userTodo]);

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
      <Header handleChange={handleChange} handleCreateSubmit={handleCreateSubmit} userInput={userInput}/>
      <Main userTodo={userTodo}
        handleChange={handleChange}
        fetchData={fetchData}
        userInput={userInput}
        userSignedIn={userSignedIn}
      />
    </div>
  );
}

export default App;
