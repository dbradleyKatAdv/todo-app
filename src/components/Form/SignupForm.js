import React from "react";

function SignupForm ({ handleCreateUserSubmit, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePasswordChange, firstNameInput, lastNameInput, passwordInput, emailInput }) {

    return(
        <form onSubmit={e=> handleCreateUserSubmit(e)}>
            <label name="firstName">FirstName:
                <input id="firstName" onChange={e => handleFirstNameChange(e.target.value)} value={firstNameInput}/>
            </label>
            <label name="lastName">lastName:
                <input id="lastName" onChange={e => handleLastNameChange(e.target.value)} value={lastNameInput}></input>
            </label>
            <label name="email">Email:
                <input id="email" type="email" onChange={e => handleEmailChange(e.target.value)} value={emailInput}></input>
            </label>
            <label name="password">Password:
                <input id="password" type="password" onChange={e => handlePasswordChange(e.target.value)} value={passwordInput}></input>
            </label>
            <label name="signup-submit">
                <button id="signup-submit" type="submit" value="signup">Signup</button>
            </label>
        </form>
    )
}

export default SignupForm;