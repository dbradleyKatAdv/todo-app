import React from 'react';
import UserTodoPage from "./../UserTodoPage/UserTodoPage.js";
import Signup from "./../Signup/Signup.js";

function Main({ userTodo, handleChange, fetchData, userInput, userSignedIn }) {
    if(!userSignedIn) {
        return(
            <Signup />
        )
    } else if (userSignedIn) {
        return (
            <UserTodoPage
            userTodo={userTodo}
            handleChange={handleChange}
            fetchData={fetchData}
            userInput={userInput}
            />
        )
    }
}

export default Main;