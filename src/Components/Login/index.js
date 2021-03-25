import React from "react";
import video from "../../assets/video/Background.mp4";
import "../../css/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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
    passError,
  } = props;
  return (
    <div className="login">
      <video autoPlay muted loop className="login__video">
        <source src={video} type="video/mp4" />
      </video>
      <h1>TMT</h1>
      <div className="login__container">
        {account ? <h2>Welcome back!</h2> : <h2>Let's go</h2>}
        <div style={{ position: "relative" }}>
          <label>Email</label>
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            id="icon"
            style={{
              fontSize: "0.9rem",
              position: "absolute",
              top: "50%",
              left: "3%",
              transform: "translateY(50%)",
            }}
          />
          <input
            type="text"
            required
            placeholder="Email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="login__container__errorMsg">{emailError}</p>
        </div>
        <div style={{ position: "relative" }}>
          <label>Password</label>
          <FontAwesomeIcon
            icon={faLock}
            id="icon"
            style={{
              fontSize: "0.9rem",
              position: "absolute",
              top: "50%",
              left: "3%",
              transform: "translateY(50%)",
            }}
          />
          <input
            type="password"
            required
            placeholder="Password"
            autoFocus
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <p className="login__container__errorMsg">{passError}</p>
        </div>
        <div>
          <a>Forgot password?</a>
        </div>
        {account ? (
          <div className="login__container__btnContainer">
            <button onClick={handleLogin}>Continue</button>
            <p>
              Don't have an account ?
              <span onClick={() => setAccount(!account)}>Sign up</span>
            </p>
          </div>
        ) : (
          <div className="login__container__btnContainer">
            <button onClick={handleSignUp}>Join with us</button>
            <p>
              Have an account ?
              <span onClick={() => setAccount(!account)}>Log in</span>
            </p>
          </div>
        )}
      </div>
      <h2>#LIFEMATRIX</h2>
    </div>
  );
};

export default Login;
