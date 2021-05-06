const initialState = {
  coolMenuShow: false,
  mobileMenuShow: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_COOL_MENU":
      return { ...state, coolMenuShow: !state.coolMenuShow };
    case "TOGGLE_MOBILE_MENU_SHOW":
      return { ...state, mobileMenuShow: !state.mobileMenuShow };
    default:
      return state;
  }
};

export default reducer;
