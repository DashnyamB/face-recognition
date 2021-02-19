import React, { useEffect, useState } from 'react';
import Login from "../Login"
import fire from "../../fire"
import "./style.css"


const LoginPage = (props) => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [account, setAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPass('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPassError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPassError(err.message);
                        break;
                }
            })
    }

    const handleSignUp = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPassError(err.message);
                        break;
                }
            })
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])

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
        </div>
    );
};

export default LoginPage;