import React, {useEffect, Fragment, useState} from 'react';
import UpdateModal from "./../Modal/UpdateModal.js";

function Main({userTodo, handleDeleteSubmit, handleUpdateSubmit, handleChange, modalState, setModalState, updateModalTrigger}) {


    if(userTodo == null) {
        <p>No data</p>
    } else if(userTodo.length == 0) {
    return(
            <p>Loading</p>
        )    
    } else if (userTodo.length > 0)
    // waiting for data
        return (
            userTodo.map((todo, key) => {
                return(
                    <Fragment key={key}>
                        <div className="card" data-modal-state={modalState}>
                            <button onClick={(e) => {handleDeleteSubmit(e)}} value={todo._id}>Delete</button>
                            <button onClick={(e) => updateModalTrigger()}>Update</button>
                            <p>{todo.todo}</p>  
                        </div>
                        <UpdateModal handleUpdateSubmit={handleUpdateSubmit}
                        handleChange={handleChange}
                        todoId={todo._id}
                        />
                    </Fragment>
                    
                ) 
            })
        )
}

export default Main;