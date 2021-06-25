import React, {  useEffect } from 'react';

function Main({userTodo, handleDeleteSubmit}) {

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
                    <div className="card" key={key}>
                        <button onClick={(e) => handleDeleteSubmit(e)} value={todo._id}>Delete</button>
                        <p>{todo.todo}</p>  
                    </div>
                ) 
            })
        )
}

export default Main;