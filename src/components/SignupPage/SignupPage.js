import React, { Fragment, useState } from "react";
import SignupForm from "../Form/SignupForm";

function SignupPage () {
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const handleCreateUserSubmit = (e) => {
        console.log("handleCreateUserSubmit firing")
    }

    const handleFirstNameChange = (e) => {
        console.log(e.target.value);
    }

    const handleLastNameChange = (e) => {
        console.log(e.target.value);
    }

    const handleEmailChange = (e) => {
        console.log(e.target.value);
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value);
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
        </Fragment>
    )
}

export default SignupPage;