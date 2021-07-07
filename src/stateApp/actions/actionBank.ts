interface DepositAction{
    type: "deposit",
    payload: number
}

interface WithdrawAction{
    type: "withdraw",
    payload: number
}

interface BankruptAction{
    type: "bankrupt"
}

export type ActionBanck = DepositAction | WithdrawAction | BankruptAction;