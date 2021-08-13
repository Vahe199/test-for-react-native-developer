import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {authReducer} from "./reducers/authReducer";
import {usersReducer} from "./reducers/usersReducer";




const reducer = combineReducers({
    auth:authReducer,
    users:usersReducer
});


export const store= createStore(reducer,applyMiddleware(thunk))
