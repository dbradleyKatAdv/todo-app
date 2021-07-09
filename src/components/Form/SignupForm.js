import React from "react";

function SignupForm ({ handleCreateUserSubmit, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePasswordChange, firstNameInput, setFirstNameInput, lastNameInput, setLastNameInput, passwordInput, setPasswordInput, emailInput, setEmailInput }) {
    
    return(
        <form onSubmit={e=> handleCreateUserSubmit(e)}>
            <label name="firstName">FirstName:
                <input id="firstName" onChange={e => handleFirstNameChange(e)} value=""></input>
            </label>
            <label name="lastName">lastName:
                <input id="lastName" onChange={e => handleLastNameChange(e)} value=""></input>
            </label>
            <label name="email">Email:
                <input id="email" type="email" onChange={e => handleEmailChange(e)} value=""></input>
            </label>
            <label name="password">Password:
                <input id="password" type="password" onChange={e => handlePasswordChange(e)} value=""></input>
            </label>
        </form>
    )
}

export default SignupForm;