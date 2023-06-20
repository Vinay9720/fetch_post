const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const products_api_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHAPI_ACTION_LOADING":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCHAPI_ACTION_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case "FETCHAPI_ACTION_ERROR":
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default products_api_reducer;
