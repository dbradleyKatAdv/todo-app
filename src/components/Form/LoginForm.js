import React from "react";

function LoginForm({handleLoginSubmit, handleLoginEmailChange, handleLoginPasswordChange, loginEmailInput, loginPasswordInput}) {
    return(
        <form onSubmit={e => handleLoginSubmit(e)}>
            <label name="email">Email:
                <input id="email" type="email" onChange={e => handleLoginEmailChange(e.target.value)} value={loginEmailInput}></input>
            </label>
            <label name="password">Password:
                <input id="password" type="password" onChange={e => handleLoginPasswordChange(e.target.value)} value={loginPasswordInput}></input>
            </label>
            <label name="login-submit">
                <button id="login-submit" type="submit" value="login">Login</button>
            </label>
        </form>
    )
}
export default LoginForm;