import React, {useState, Fragment} from 'react';
import LoginForm from "./../Form/LoginForm.js";
import {Link} from "react-router-dom";

function LoginPage() {
    const [loginEmailInput, setLoginEmailInput] = useState("");
    const [loginPasswordInput, setLoginPasswordInput] = useState("");

    const handleLoginSubmit = (e) => {
        loginRequest();
        e.preventDefault();
    }

    const handleLoginEmailChange = (inputValue) => {
        console.log(inputValue);
        setLoginEmailInput(inputValue);

    }

    const handleLoginPasswordChange = (inputValue) => {
        console.log(inputValue);
        setLoginPasswordInput(inputValue);
    }

    const loginRequest = async () => {
        try {
            var headers = new Headers();
            headers.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("email", `${loginEmailInput}`);
            urlencoded.append("password", `${loginPasswordInput}`);

            var requestOptions = {
                method: 'POST',
                headers: headers,
                body: urlencoded,
                redirect: 'follow'
            };

            const response = await fetch("http://localhost:3001/api/login", requestOptions);
            console.log(response)
            // if (!response.ok) return setCreateUserSuccess(false);

            const data = await response.json();
            console.log(data)
            if (data.success === true) {
                // return setCreateUserSuccess(true);
                console.log(data)
            } else {
                console.log(data)
                // return setCreateUserSuccess(false)
            }
        } catch (err) {
            // console.log(err)
            // return setCreateUserSuccess(false);
        }
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
            <Link to="/signup">Signup</Link>
        </Fragment>
       
    )
}
export default LoginPage;