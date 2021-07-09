import React, {Fragment, useState} from "react";
import ToggleButton from "./ToggleButton.js";

function TextCard({ todo, key }) {
    const [textButtonActive, setTextButtonActive] = useState(false);
    const [userTextBoxInput, setUserTextBoxInput] = useState(todo.todo)

    const updateTodo = async (todoId) => {
        try {
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

    
        if(userTextBoxInput != undefined) {
            var urlencoded = new URLSearchParams();
            urlencoded.append("todo", `${userTextBoxInput}`);
        } else {
            console.log("need new value")
        }

        var requestOptions = {
            method: 'PUT',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        };

        const response = await fetch(`http://localhost:3001/api/${todoId}`, requestOptions);
        if(!response.ok) return 
        console.log("error", response.message);
        const data = await response.json();
        // can throw a success message here        
        
        } catch(err) {
        throw new Error(err, "Here");
        }
    }


    const deleteTodo = async (todoId) => {
        try {
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("todo", `${userTextBoxInput}`);

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

    const handleChangeTextBox = (e) => {
        console.log(e.target.value)
        setUserTextBoxInput(e.target.value)
    }


  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    deleteTodo(e.target.value);
  }

    return (
        <div className="card" key={key}>
            {
                textButtonActive ?
                <input value={userTextBoxInput} onChange={e => handleChangeTextBox(e)} className="card-text-box" /> :
                <input value={todo.todo} disabled className="card-text-box" />
            }
            <ToggleButton todo={todo} 
                textButtonActive={textButtonActive} 
                setTextButtonActive={setTextButtonActive}
                updateTodo={updateTodo}
                handleDeleteSubmit={handleDeleteSubmit}/>
        </div>
    )
}

export default TextCard;