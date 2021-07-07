import {combineReducers} from "redux"
import reducerAccount from "./banckReducer";



const reducers = combineReducers({ 
    bank: reducerAccount
})

export type State = ReturnType<typeof reducers>
export default reducers;