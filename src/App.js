import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  const [userInput, setUserInput] = useState("");
  const [userTodo, setUserTodo] = useState("");
  const [todoSuccess, setTodoSuccess] = useState("");

  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3001/api ', {
          method: "GET",
          "Content-Type": "application/x-www-form-urlencoded"
        })
        if(!response.ok) return;
        const data = await response.json();
        setUserTodo(data.data);
    } catch (err) {
      throw new Error(err)
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
      console.log(data)
      if(data.success == true) {
        setTodoSuccess(true);
      }
      
    } catch(err) {
      throw new Error(err, "here");
    }
  }

  useEffect(() => {
    fetchData();
  }, ([]))

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     sendTodo();
    
  }

  return (
    <div className="App">
      <Header handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Main userTodo={userTodo} />
    </div>
  );
}

export default App;
