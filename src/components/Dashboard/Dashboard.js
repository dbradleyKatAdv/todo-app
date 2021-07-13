import React, { useEffect, useState, Fragment } from "react";
import TodoCard from "../Card/TodoCard.js";
import NoData from "./NoData.js";
import TodoHeader from "../Header/TodoHeader.js";

function UserTodoPage() {
    const [userInput, setUserInput] = useState("");
    const [userTodo, setUserTodo] = useState([]);
    const [sendTodoSuccess, setSendTodoSuccess] = useState("");
    const [getTodoSuccess, setGetTodoSuccess] = useState("");

    const fetchData = async () => {
        try {

            const response = await fetch('http://localhost:3001/api/todos', {
                method: "GET",
                "Content-Type": "application/x-www-form-urlencoded"
            });

            if (!response.ok) {
                const data = await response.json();

                if (!data.success) {
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

            const response = await fetch("http://localhost:3001/api/todos", requestOptions);
            if (!response.ok) return setSendTodoSuccess(false);
            const data = await response.json();
            if (data.success === true) {
                return setSendTodoSuccess(true);
            } else {
                return setSendTodoSuccess(false)
            }
        } catch (err) {
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

    useEffect(() => {
        return fetchData();
    }, [userTodo]);
    
    if (!getTodoSuccess) {
        return (
            <p className="errorMessage">Issue with API</p>
        )
    } else if (userTodo.length === 0) {
        return (
            <NoData />
        )
    } else if (userTodo.length > 0) {
        return (
            <Fragment>
                <TodoHeader 
                    handleChange={handleChange}
                    handleCreateSubmit={handleCreateSubmit} 
                    userInput={userInput}
                />
                <TodoCard
                    userTodo={userTodo}
                    handleChange={handleChange}
                    fetchData={fetchData}
                    userInput={userInput}
                />
            </Fragment>
        )
    }
}


export default UserTodoPage;