import { Dispatch } from "react"
export const dispositMoney = (amount : number) => {
    console.log("disposite money" , amount)
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
