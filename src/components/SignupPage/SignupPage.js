import React, { Fragment, useState } from "react";
import SignupForm from "../Form/SignupForm";
import {Link} from "react-router-dom";

function SignupPage () {
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [createUserSuccess, setCreateUserSuccess] = useState("");

    const createNewUser = async () => {
        try {
            var headers = new Headers();
            headers.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("firstName", `${firstNameInput}`);
            urlencoded.append("lastName", `${lastNameInput}`);
            urlencoded.append("email", `${emailInput}`);
            urlencoded.append("password", `${passwordInput}`);

            var requestOptions = {
                method: 'POST',
                headers: headers,
                body: urlencoded,
                redirect: 'follow'
            };

            const response = await fetch("http://localhost:3001/api/users", requestOptions);
            console.log(await response.json());

            if (!response.ok) return setCreateUserSuccess(false);

            const data = await response.json();
            if (data.success === true) {
                return setCreateUserSuccess(true);
            } else {
                return setCreateUserSuccess(false)
            }
        } catch (err) {
            return setCreateUserSuccess(false);
        }
    }

    const handleCreateUserSubmit = (e) => {
        e.preventDefault();
        createNewUser();
    }

    const handleFirstNameChange = (inputValue) => {
        setFirstNameInput(inputValue);
    }

    const handleLastNameChange = (inputValue) => {
        setLastNameInput(inputValue);
    }

    const handleEmailChange = (inputValue) => {
        setEmailInput(inputValue);
    }

    const handlePasswordChange = (inputValue) => {
        setPasswordInput(inputValue);
    }
    
    return(
        
        <Fragment>
            <SignupForm 
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleCreateUserSubmit={handleCreateUserSubmit}
                setPasswordInput={setPasswordInput}
                setEmailInput={setEmailInput}
                setFirstNameInput={setFirstNameInput}
                setLastNameInput={setLastNameInput}
                firstNameInput={firstNameInput}
                lastNameInput={lastNameInput}
                passwordInput={passwordInput}
                emailInput={emailInput}
            />
            <Link to="/">Login</Link>
        </Fragment>
    )
}

export default SignupPage;