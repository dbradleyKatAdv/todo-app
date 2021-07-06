import React, { useState } from "react";
import TodoCard from "./../Card/TodoCard.js";

// contains component for all user todos
function UserTodo({ handleChange, handleUpdateSubmit, userTodo, handleDeleteSubmit, handleTextBoxInput, textBoxText }) {
    const [activeTodo, setActiveTodo] = useState("");
    const [textBoxState, setTextBoxState] = useState(false);
    
    const updateButtonState = (e, id) => {
        setActiveTodo(id);
        // handleUpdateSubmit(e, id);
        setTextBoxState(!textBoxState);
    }


    return (
        <div className="card-wrapper">
            <TodoCard
                handleUpdateSubmit={handleUpdateSubmit}
                updateButtonState={updateButtonState}
                handleDeleteSubmit={handleDeleteSubmit}
                userTodo={userTodo}
                textBoxState={textBoxState}
                setTextBoxState={setTextBoxState}
                handleTextBoxInput={handleTextBoxInput}
                textBoxText={textBoxText}
            />
            <div className="modal-overlay"></div>
        </div>
    )
}

export default UserTodo;