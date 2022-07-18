import axios from "axios";

export const GET_ADDRESS_REQUEST = 'GET_ADDRESS_REQUEST';
export const GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS';
export const GET_ADDRESS_FAILED = 'GET_ADDRESS_FAILED';
export const CLEAR_ADDRESS = 'CLEAR_ADDRESS';

const API_KEY = "6FyOBiIn11SX0dsgzd-4-FSBIgMIW4IgkZN3rFGoKVM";
export const getAddress = ({q, at}) => {
    return dispatch => {
        dispatch({type: GET_ADDRESS_REQUEST});

        axios.get('https://autosuggest.search.hereapi.com/v1/autosuggest', {
            params: {
                apiKey: API_KEY,
                q,
                at,
                limit: 10,
            }
        })
            .then(res => {
                dispatch({type: GET_ADDRESS_SUCCESS, payload: {...res.data}});
            })
            .catch(error => {
                dispatch({type: GET_ADDRESS_FAILED, payload: {error}});
            })
    }
}

export const clearAddress = () => {
    return {
        type: CLEAR_ADDRESS,
    }
}

