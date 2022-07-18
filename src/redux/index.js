import {combineReducers} from 'redux'
import {userReducer} from "./reducers/user";
import {addressReducer} from "./reducers/address";

export const rootReducer = combineReducers({
    user: userReducer,
    address: addressReducer,
})
