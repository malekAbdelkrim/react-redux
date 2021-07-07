import {ActionBanck} from "../actions/actionBank";
import { ActionType } from "../action-type";

const initalSateValue = 0;


const reducerBank = (state : 0 = initalSateValue , action : ActionBanck) => {
    switch(action.type){
        case ActionType.DEPOSITE:
            return state+action.payload
        case ActionType.WITHDRAW:
            return state - action.payload
            case ActionType.BANKRUPT: 
           return 0 
            default:
                return state
    }
    }

    export default reducerBank