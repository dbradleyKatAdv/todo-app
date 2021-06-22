import React from 'react';

function Header() {
    return(
    <header>
        <form>
            <label name="todoInput">Create Todo note here: </label>
            <input type="text" id="todoInput" placeholder="Type todo here"/>
            <button type="submit">Submit Todo</button>
        </form>
    </header>
    )
}
export default Header;