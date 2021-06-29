import React from 'react';

function Header({handleChange, handleCreateSubmit}) {
    return(
        <header className="header">
            <form onSubmit={e => handleCreateSubmit(e)}>
                <label name="todoInput">Create Todo note here: 
                    <input onChange={e => handleChange(e)} type="text" id="todoInput" placeholder="Type todo here"/>
                </label>
                <input type="submit" value="Submit Todo"  />
            </form>
        </header>
    )
}
export default Header;