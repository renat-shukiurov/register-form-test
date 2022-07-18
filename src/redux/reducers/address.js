import {CLEAR_ADDRESS, GET_ADDRESS_FAILED, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS} from "../actions/AddressActions";

const initialState = {
    data: [],
    error: null,
    loading: false,
};

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESS_REQUEST:
            return {
                ...state, loading: true, data: []
            };
        case GET_ADDRESS_SUCCESS:
            return {
                ...state,
                data: action.payload.items,
                error: null,
                loading: false,
            }
        case GET_ADDRESS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case CLEAR_ADDRESS: {
            return {
                ...state,
                loading: false,
                error: null,
                data: []
            }
        }
        default:
            return state;
    }
}