export const AppReducer = (state, action) => {
  switch (action.type) {
    // case "REGISTER_START":
    //   return {
    //     user: null,
    //     isFetching: true,
    //     error: false,
    //   };

    // case "REGISTER_SUCCESS":
    //   return {
    //     user: action.payload,
    //     isFetching: false,
    //     error: false,
    //   };

    // case "REGISTER_FAILED":
    //   return {
    //     user: null,
    //     isFetching: false,
    //     error: true,
    //   };

    case "LOGIN_START":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILED":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};
