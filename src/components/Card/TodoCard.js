import React, { Fragment } from "react";
import TextBox from "./TextBox.js";

function TodoCard({ userTodo }) {

    return (
        userTodo.map((todo, key) => {
            return(
                <Fragment key={key}>
                    <div className="card">
                        <TextBox todo={todo} />
                    </div>
                </Fragment>
            ) 
        })
    )
}

export default TodoCard;