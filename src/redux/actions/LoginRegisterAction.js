import fire from "../../firebase";

export const Login = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart);

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        // console.log(response.user);
        const user = {
          email: response.user.email,
          id: response.user.uid,
        };
        localStorage.setItem("userId", user.id);
        dispatch(loginSuccess(user));
      })
      .catch((err) => {
        dispatch(loginError(err.message));
      });
  };
};

export const loginStart = () => {
  return {
    type: "LOGIN_START",
  };
};

export const loginSuccess = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    userData,
  };
};

export const loginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    error,
  };
};
