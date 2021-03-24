const initialState = {
  coolMenuShow: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_COOL_MENU":
      return { ...state, coolMenuShow: true };
    case "HIDE_COOL_MENU":
      return { ...state, coolMenuShow: false };
    default:
      return state;
  }
};

export default reducer;
