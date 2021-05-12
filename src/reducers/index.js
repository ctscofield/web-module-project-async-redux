import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from "./../actions/index";

const initialState = {
    game: {
        title: "",
        thumb: "",
        normalPrice: "",
        salePrice: "",
        savings: "",
        steamRatingText: "",
        link: `https://www.cheapshark.com/redirect?dealID={id}`
    },
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_START):
        return({
          ...state,
          isFetching: true
        })
      case(FETCH_SUCCESS):
        
        return({
          ...state,
          game: action.payload,
          isFetching: false
        })
      case(FETCH_FAIL):
        return({
          ...state,
          error: action.payload,
          isFetching: false
        })
      default:
        return state;
    }
  };