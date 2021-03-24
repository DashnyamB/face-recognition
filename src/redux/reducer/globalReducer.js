const initialState = {
  coolMenuShow: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_COOL_MENU":
      return { ...state, coolMenuShow: !state.coolMenuShow };

    default:
      return state;
  }
};

export default reducer;
