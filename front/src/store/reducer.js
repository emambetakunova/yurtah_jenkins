import {LISTING_SUCCESS, LISTING_FAILURE} from "./action";

const initialState = {
  listings: [],
  error: null,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTING_SUCCESS:
      return {
        ...state,
        listings: action.response,
      };
    case LISTING_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
export default reducer;