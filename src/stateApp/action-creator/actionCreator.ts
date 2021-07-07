import { Dispatch } from "redux"
import { ActionType } from "../action-type"
import { ActionBanck } from "../actions/actionBank"

export const depositMoney = (amount : number) => {
    return(dispatch : Dispatch<ActionBanck>) => {
           dispatch({
         type: ActionType.DEPOSITE,
           payload: amount
    })
}
}

export const withdrawMoney = (amount : number) => {
    return(dispatch : Dispatch<ActionBanck>) => {
           dispatch({
         type: ActionType.WITHDRAW,
           payload: amount
    })
}
}

export const bankruptMoney = () => {
    return(dispatch : Dispatch<ActionBanck>) => {
           dispatch({
         type: ActionType.BANKRUPT
         
    })
}
}


