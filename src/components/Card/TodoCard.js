import React from "react";
import TextCard from "./TextCard.js";

function TodoCard({ userTodo, userInput }) {

    return (
        <div className="card-wrapper">
            {userTodo.map((todo, key) => {
               return(
                    <TextCard
                        todo={todo}
                        userInput={userInput}
                        mapkey={key}
                    />
                )
            })}
        </div>
    )
}

export default TodoCard;