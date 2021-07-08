import {ActionBanck} from "../actions/actionBank";
import { ActionType } from "../action-type";

const initalSateValue = {
    account : 0,
    message :   ""

};

type initialType = {
    account : number,
    message : string
}


const reducerBank = (state : initialType  = initalSateValue , action : ActionBanck) => {
    switch(action.type){
        case ActionType.DEPOSITE:
            return {message : "data added" , account : state.account + action.payload}
              
 
                
        case ActionType.WITHDRAW:
            if(state.account > 0){
                return {message : "withdraw money" , account : state.account -action.payload}
             }else{
               return  {... state , message : "no operation"}
             }
           
            case ActionType.BANKRUPT: 
           return  {account : 0 , message : "no operation"}
            default:
                return state
    }
    }

    export default reducerBank