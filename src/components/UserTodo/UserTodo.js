import React from "react";
import TodoCard from "./../Card/TodoCard.js";

function UserTodo({ userTodo }) {

    return (
        <div className="card-wrapper">
            <TodoCard
                userTodo={userTodo}
            />
            <div className="modal-overlay"></div>
        </div>
    )
}

export default UserTodo;