import React, {Fragment, useState} from "react";
import ToggleButton from "./ToggleButton.js";

function TextBox({todo}) {
    const [textButtonActive, setTextButtonActive] = useState(false);


    return (
        <Fragment>
            {
                textButtonActive ?
                <input value={todo.todo} className="card-text-box" /> :
                <input value={todo.todo} disabled className="card-text-box" />
            }
            <ToggleButton todo={todo} textButtonActive={textButtonActive} setTextButtonActive={setTextButtonActive} />
        </Fragment>
    )
}

export default TextBox;