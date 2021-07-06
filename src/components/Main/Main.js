import React from 'react';
import UserTodo from "./../UserTodo/UserTodo.js";

function Main({ userTodo, handleDeleteSubmit, handleChange }) {

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
                handleDeleteSubmit={handleDeleteSubmit}
                handleChange={handleChange}
            />
        )
    }

}

export default Main;