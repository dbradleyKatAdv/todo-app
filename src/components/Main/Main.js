import React, {  useState  } from 'react';

function Main({userTodo}) {
    if(userTodo != undefined) {
       return(
           <p>Data</p>
       )
    } else {
        return(
            <p>No data</p>
        )
    }
}

export default Main;