import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import Login from "../Login";
import HomePage from "../../PageComponents/HomePage";
import fire from "../../firebase";
import "./style.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/LoginRegisterAction";

const LoginPage = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [account, setAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPass("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPassError("");
  };

  const handleLogin = () => {
    props.login(email, pass);
  };
  // sign up
  const handleSignUp = () => {
    clearErrors();
    setIsLoggedIn(account);
    fire
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(isLoggedIn);
    fire.auth().signOut();
  };

  //   const authListener = () => {
  //     fire.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         clearInputs();
  //         setUser(user);
  //       } else {
  //         setUser("");
  //       }
  //     });
  //   };

  //   useEffect(() => {
  //     authListener();
  //     return
  //   }, []);

  return (
    <div>
      <Login
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        account={account}
        setAccount={setAccount}
        emailError={emailError}
        passError={passError}
      />
      {props.user.uid && <Redirect to="/" />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.LoginRegisterReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.Login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
