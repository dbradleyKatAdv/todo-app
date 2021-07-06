import React, {useState} from 'react';

function ToggleButton({todo, setTextButtonActive, textButtonActive, handleDeleteSubmit, updateTodo}) {

    const toggleButtonHandler = (e) => {
        setTextButtonActive(!textButtonActive)
    }

    return (
        <div className="card-button-container">
            <button onClick={(e) => {handleDeleteSubmit(e)}} value={todo._id}>Delete</button>
            {
                textButtonActive ?
                <button name="done" value={todo._id} onClick={e => {
                    toggleButtonHandler(e);
                    updateTodo(e.target.value)
                }} >Done</button> :
                <button name="update" value={todo._id} onClick={e => toggleButtonHandler(e.target.value)}>Update</button>
            }
        </div>
    )
}

export default ToggleButton;