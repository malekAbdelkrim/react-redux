const reducerAccount = (state: number = 0, action: any) => {
    switch (action.type) {
        case "DEPOSITE":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        default:
            return state
    }
}

export default reducerAccount;