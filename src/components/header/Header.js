import React from 'react';
import AddTodoForm from "./../Form/AddTodoForm.js";

function Header({handleChange, handleCreateSubmit, userInput}) {
    return(
        <header className="header">
            <AddTodoForm
            handleChange={handleChange}
            handleCreateSubmit={handleCreateSubmit}
            userInput={userInput}
            />
        </header>
    )
}
export default Header;