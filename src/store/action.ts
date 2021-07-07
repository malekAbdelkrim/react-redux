export const dispositMoney = (amount : number) => {
    return {
       
            type : "DEPOSITE",
            payload: amount
       
    }
}


export const withdrawMoney = (amount : number) => {
    return {
        
            type: "WITHDRAW",
            payload : amount
      
    }
}
