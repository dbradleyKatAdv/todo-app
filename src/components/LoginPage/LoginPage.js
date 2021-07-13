import React, {useState, Fragment} from 'react';
import LoginForm from "./../Form/LoginForm.js";
import {Link} from "react-router-dom";

function LoginPage() {
    const [loginEmailInput, setLoginEmailInput] = useState("");
    const [loginPasswordInput, setLoginPasswordInput] = useState("");

    const handleLoginSubmit = (e) => {
        console.log(e);
    }

    const handleLoginEmailChange = (inputValue) => {
        console.log(inputValue);
        setLoginEmailInput(inputValue);

    }

    const handleLoginPasswordChange = (inputValue) => {
        console.log(inputValue);
        setLoginPasswordInput(inputValue);
    }

    return (
        <Fragment>
            <LoginForm
                handleLoginSubmit={handleLoginSubmit}
                loginEmailInput={loginEmailInput}
                loginPasswordInput={loginPasswordInput}
                handleLoginEmailChange={handleLoginEmailChange}
                handleLoginPasswordChange={handleLoginPasswordChange}
            />
            <Link to="/">Signup</Link>
        </Fragment>
       
    )
}
export default LoginPage;