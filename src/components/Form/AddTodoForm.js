import React from "react";

function AddTodoForm ({ handleChange, handleCreateSubmit, userInput }) {
    return(
        <form onSubmit={e => handleCreateSubmit(e)}>
            <label name="todoInput">Create Todo note here:
                <input onChange={e => handleChange(e)} type="text" id="todoInput" placeholder="Type todo here" value={userInput} />
            </label>
            <input type="submit" value="Submit Todo" />
        </form>
    )
}

export default AddTodoForm;