import React from 'react';
import { Route } from 'react-router-dom';

const Login = (props) => {
    const {
        email,
        setEmail,
        pass,
        setPass,
        handleLogin,
        handleSignUp,
        account,
        setAccount,
        emailError,
        passError } = props;
    return (
        <div className="login">
            {account ? (
                <>
                    <div className="loginContainer">
                        <label>Login</label>
                        <label>User</label>
                        <input
                            type="text"
                            required
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <p className="errorMsg">{emailError}</p>
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            autoFocus
                            value={pass}
                            onChange={(e) => setPass(e.target.value)} />
                        <p className="errorMsg">{passError}</p>
                        <div className="btnContainer">
                            <button onClick={handleLogin}>
                                Log in
                                </button>
                            <p>
                                Don't have an account ?
                                <span onClick={() => setAccount(!account)}>
                                    Sign up
                                </span>
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                    <>
                        <div className="loginContainer">
                            <label>Create Account</label>
                            <label>User</label>
                            <input
                                type="text"
                                required
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <p className="errorMsg">{emailError}</p>
                            <label>Password</label>
                            <input
                                type="password"
                                required
                                autoFocus
                                value={pass}
                                onChange={(e) => setPass(e.target.value)} />
                            <p className="errorMsg">{passError}</p>
                            <div className="btnContainer">
                                <button onClick={handleSignUp}>Sign up</button>
                                <p>
                                    Have an account ?
                                    <span onClick={() => setAccount(!account)} >
                                        Log in
                                    </span>
                                </p>
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
};

export default Login;