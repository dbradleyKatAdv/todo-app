import React, { useState } from "react";
import UpdateModal from "./../Modal/UpdateModal.js";
import TodoCard from "./../Card/TodoCard.js";

// contains component for all user todos
function UserTodo({ handleChange, handleUpdateSubmit, userTodo, handleDeleteSubmit, setModalState, modalState}) {
    const [activeTodo, setActiveTodo] = useState("");
    
    const updateModalTrigger = (e, id) => {
        setActiveTodo(id);
        handleUpdateSubmit(e, id);
    }

    return (
        <div className="card-wrapper" data-modal-state={modalState}>
            <UpdateModal 
                handleUpdateSubmit={handleUpdateSubmit}
                handleChange={handleChange}
                todoId={activeTodo}
            />
            <TodoCard
                handleUpdateSubmit={handleUpdateSubmit}
                setModalState={setModalState}
                updateModalTrigger={updateModalTrigger}
                handleDeleteSubmit={handleDeleteSubmit}
                userTodo={userTodo}
            />
            <div className="modal-overlay"></div>
        </div>
    )
}

export default UserTodo;