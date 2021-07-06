import React from 'react';
import UserTodo from "./../UserTodo/UserTodo.js";

function Main({ userTodo, handleChange, fetchData, userInput }) {

    if(userTodo == null) {
        <p>No data</p>
    } else if(userTodo.length == 0) {
    return(
            <p>Loading</p>
        )    
    } else if (userTodo.length > 0) {
        return(
            <UserTodo
                userTodo={userTodo}
                handleChange={handleChange}
                fetchData={fetchData}
                userInput={userInput}
            />
        )
    }

}

export default Main;