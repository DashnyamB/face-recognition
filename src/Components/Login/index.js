import React from 'react';

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
            <div className="loginContainer">
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
                    {account ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>
                                Don't have an account ?
                                <span onClick={() => setAccount(!account)}>Sign up</span>
                            </p>
                        </>
                    ) : (
                            <>
                                <button onClick={handleSignUp}>Sign up</button>
                                <p>
                                    Have an account ?
                                    <span onClick={() => setAccount(!account)} > Sign in</span>
                                </p>
                            </>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Login;