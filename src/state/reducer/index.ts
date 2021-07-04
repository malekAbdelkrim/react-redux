import {combineReducers} from "redux";
import reducerAccount from "./accountReducer";

const reducers = combineReducers({
    account : reducerAccount
})



export default reducers;