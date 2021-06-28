import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  const [userInput, setUserInput] = useState("");
  const [userTodo, setUserTodo] = useState([]);
  const [todoSuccess, setTodoSuccess] = useState("");
  const [modalState, setModalState] = useState(false);  


  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3001/api', {
          method: "GET",
          "Content-Type": "application/x-www-form-urlencoded"
        })
        if(!response.ok) {
          return setUserTodo(null);
        } else {
          const data = await response.json();
          return setUserTodo(data.data);
        };

    } catch (err) {
      console.log(err);
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

  const deleteTodo = async (todoId) => {
      try {
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
  
        var urlencoded = new URLSearchParams();
        urlencoded.append("todo", `${userInput}`);
  
        var requestOptions = {
            method: 'DELETE',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        };

        const response = await fetch(`http://localhost:3001/api/${todoId}`, requestOptions)
        if(!response.ok) throw new Error(response.message);
        const data = await response.json();
        if(data.success == true) {
          console.log(data)
        } else {
          throw new Error('Issue with API')
        }
      } catch(err) {
        throw new Error(err.message);
      }
  }

  const updateTodo = async (todoId) => {
    try {
      var headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("todo", `${userInput}`);

      var requestOptions = {
          method: 'PUT',
          headers: headers,
          body: urlencoded,
          redirect: 'follow'
      };

      const response = await fetch(`http://localhost:3001/api/${todoId}`, requestOptions);
      if(!response.ok) return console.log("error", response.message);
      const data = await response.json();

      if(data.success == true) {
        fetchData();
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
      setUserInput();
  }

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    deleteTodo(e.target.value);
  }

  const handleUpdateSubmit = (e, id) => {
    e.preventDefault();
    updateTodo(id);
    setModalState(!modalState);
  }

  return (
    <div className="App">
    {/* use success state of api to show different views */}
      <Header handleChange={handleChange} handleCreateSubmit={handleCreateSubmit}/>
      <Main userTodo={userTodo}
        todoSuccess={todoSuccess}
        handleDeleteSubmit={handleDeleteSubmit}
        handleUpdateSubmit={handleUpdateSubmit}
        handleChange={handleChange}
        modalState={modalState}
      />
    </div>
  );
}

export default App;
