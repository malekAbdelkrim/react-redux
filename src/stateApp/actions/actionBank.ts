import {ActionType} from "../action-type"

interface DepositAction{
    type: ActionType.DEPOSITE,
    payload: number
}

interface WithdrawAction{
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction{
    type: ActionType.BANKRUPT
}

export type ActionBanck = DepositAction | WithdrawAction | BankruptAction;