import React, {Fragment} from "react";

function TodoCard({userTodo, handleDeleteSubmit, updateModalTrigger }) {
    return (
        userTodo.map((todo, key) => {
            return(
                <Fragment key={key}>
                    <div className="card">
                        <div className="card-text-box">
                            <p>{todo.todo}</p> 
                        </div>
                        <div className="card-button-container">
                            <button onClick={(e) => {handleDeleteSubmit(e)}} value={todo._id}>Delete</button>
                            <button onClick={(e) => updateModalTrigger(e, todo._id)} >Update</button>
                        </div>
                    </div>
                </Fragment>
                
            ) 
        })
    )
}

export default TodoCard;