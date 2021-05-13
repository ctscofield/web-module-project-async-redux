import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getGame = () => dispatch =>{
    dispatch({type: FETCH_START});
    axios
        .get("https://www.cheapshark.com/api/1.0/deals")
        .then(res => {
            console.log(res.data);
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err});
        })
}

export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (game)=> {
    return({type: FETCH_SUCCESS, payload: game});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error})
}