import React, { useEffect, useState } from "react";
import video from "../../assets/video/Background.mp4";
import "../../css/style.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import fire from "../../firebase";

const ForgotPassword = (props) => {
    const [user, setUser] = useState("");
    const [resetEmail, setResetEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [resetError, setResetError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const clearInputs = () => {
        resetEmail("");
    };
    const clearErrors = () => {
        setResetEmail("");
        setResetError("");
    };

    const handleReset = () => {
        console.log(resetEmail);
        clearErrors();
        fire.auth()
            .sendPasswordResetEmail(resetEmail)
            .catch((err) => {
                if (err.code) {
                    setResetError(err.message);
                }
            })
    };

    return (
        <div className="login">
            <video autoPlay muted loop className="login__video">
                <source src={video} type="video/mp4" />
            </video>
            <h1>TMT</h1>
            <div className="login__container">
                <h2>Reset Password</h2>
                <div style={{ position: "relative" }}>
                    <label>Enter your Email</label>
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
                        onChange={(e) => setResetEmail(e.target.value)}
                    />
                    <p className="login__container__errorMsg">{resetError}</p>
                </div>
                <div>
                    <Link to="/login">Back to Login Page</Link>
                </div>
                <div className="login__container__btnContainer">
                    <button onClick={handleReset}>Continue</button>
                </div>
            </div>
            <h2>#LIFEMATRIX</h2>
        </div>
    );
};

export default ForgotPassword;
