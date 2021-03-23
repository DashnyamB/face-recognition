const initialState = {
  user: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START": {
      return {
        ...state,
        loading: true,
      };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        user: { ...action.userData },
        loading: false,
      };
    }
    case "LOGIN_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case "REGISTER_START": {
      return {};
    }
    case "REGISTER_START": {
      return {};
    }
    case "REGISTER_START": {
      return;
      {
      }
    }
    default:
      return state;
  }
};

export default reducer;
