import fire from "../../firebase";

export const logout = () => {
  return function (dispatch) {
    fire
      .auth()
      .signOut()
      .then((res) => {
        dispatch(logoutSuccess());
      })
      .catch((err) => {
        dispatch(logoutError());
      });
  };
};

export const logoutSuccess = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};
export const logoutError = () => {
  return {
    type: "LOGOUT_ERROR",
  };
};
