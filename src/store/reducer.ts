const initialState = {
    message : "hello",
    account : 10,
   
}
const reducerAccount = (state : any =  initialState , action: any) => {
    switch (action.type) {
        case "DEPOSITE":
            return {... state , account : state.account + action.payload};
        case "WITHDRAW":
            return {... state , account : state.account - action.payload};
        default:
            return state.account
    }
}

export default reducerAccount;