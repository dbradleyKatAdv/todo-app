import React from 'react';

function Header({handleChange, handleSubmit}) {
    return(
        <header>
            <form onSubmit={e => handleSubmit(e)}>
                <label name="todoInput">Create Todo note here: 
                    <input onChange={e => handleChange(e)} type="text" id="todoInput" placeholder="Type todo here"/>
                </label>
                <input type="submit" value="Submit Todo"  />
            </form>
        </header>
    )
}
export default Header;