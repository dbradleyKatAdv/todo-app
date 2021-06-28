import React from "react";

function UpdateModal ({handleUpdateSubmit, handleChange, todoId}) {
    return (
        <div className="update-modal">
            <form onSubmit={e => handleUpdateSubmit(e, todoId)}>
                <label name="updateTodoInput">Update Todo Here: 
                    <input onChange={e => handleChange(e)} type="text" id="updateTodoInput" placeholder="Update todo here" />
                </label>
                <button type="submit">Update TODO</button>
            </form>
        </div>
    )
}

export default UpdateModal;