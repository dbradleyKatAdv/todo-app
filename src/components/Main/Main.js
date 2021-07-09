import React, { Fragment } from 'react';
import UserTodoPage from "./../UserTodoPage/UserTodoPage.js";
import SignupPage from "../SignupPage/SignupPage.js";
import TodoHeader from "../Header/TodoHeader.js";

function Main({ userTodo, handleChange, fetchData, userInput, userSignedIn, handleCreateSubmit, getTodoSuccess }) {



    if(!userSignedIn) {
        return(
            <SignupPage />
        )
    } else if (userSignedIn) {
        return (
            <Fragment>
                <TodoHeader 
                    handleChange={handleChange}
                    handleCreateSubmit={handleCreateSubmit} 
                    userInput={userInput}
                />
                <UserTodoPage
                    userTodo={userTodo}
                    handleChange={handleChange}
                    fetchData={fetchData}
                    userInput={userInput}
                    getTodoSuccess={getTodoSuccess}
                />

            </Fragment>
           
        )
    }
}

export default Main;