import React, {useState} from 'react';

function ToggleButton({todo, setTextButtonActive, textButtonActive, handleDeleteSubmit}) {

    const toggleButtonHandler = (e) => {
        e.preventDefault();
        setTextButtonActive(!textButtonActive)
    }

    return (
        <div className="card-button-container">
            <button onClick={(e) => {handleDeleteSubmit(e)}} value={todo._id}>Delete</button>
            {
                textButtonActive ?
                <button name="done" onClick={e => toggleButtonHandler(e)} >Done</button> :
                <button name="update" onClick={e => toggleButtonHandler(e)}>Update</button>
            }
        </div>
    )
}

export default ToggleButton;