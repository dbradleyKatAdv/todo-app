import React, { useEffect } from "react";
import TodoCard from "./../Card/TodoCard.js";
import NoData from "./NoData.js";

function UserTodoPage({ userTodo, handleChange, fetchData, userInput, getTodoSuccess }) {

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
            <TodoCard
                userTodo={userTodo}
                handleChange={handleChange}
                fetchData={fetchData}
                userInput={userInput}
            />
        )
    }
}


export default UserTodoPage;