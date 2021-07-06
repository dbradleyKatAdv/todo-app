import React, { Fragment } from "react";
import TextBox from "./TextBox.js";

function TodoCard({ userTodo, fetchData, userInput }) {
    
    return (
        userTodo.map((todo, key) => {
            return(
                <Fragment key={key}>
                    <div className="card">
                        <TextBox 
                        todo={todo}
                        userInput={userInput} 
                        />
                    </div>
                </Fragment>
            ) 
        })
    )
}

export default TodoCard;