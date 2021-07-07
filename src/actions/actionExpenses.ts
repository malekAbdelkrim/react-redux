import { Dispatch } from "redux";
import { ExpenseState } from "../store/expenseStore";
import { ExpenseActionTypes } from "../types/actions";
import { Expense } from "../types/expenses";
 

export const addExpense = (expense: Expense): ExpenseActionTypes => ({
  type: "ADD_EXPENSES",
  expense,
});

export const removeExpense = (id: number): ExpenseActionTypes => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const editExpense = (expense: Expense): ExpenseActionTypes => ({
  type: "EDIT_EXPENSE",
  expense,
});
export const setExpense = (expenses: Expense[]): ExpenseActionTypes => ({
  type: "SET_EXPENSE",
  expenses,
});

export const startAddExpense = (expenseData :{
    description : string,
    note: string , 
    amount : number,
    createAt: number 
}) => {
    return (dispatch : Dispatch<ExpenseActionTypes> , getState: () => ExpenseState) =>{
        const {

            description  = "",
            note = "",
            amount = 0,
            createAt =0 
        } = expenseData
    
        const expense = {description , note ,amount ,  createAt}
        const id = 1;
        dispatch(addExpense({id , ...expense}))
    }
}

const startRemoveExpense = (id : number) => {
    return(dispatch : Dispatch<ExpenseActionTypes> , getState : () => ExpenseState) => {
        dispatch(removeExpense(id))
    }
}


const startEditExpense = (expenseData : Expense) => {
    return(dispatch : Dispatch<ExpenseActionTypes> , getState : () => ExpenseState) => {
        dispatch(editExpense(expenseData))
    }
}


const startSetExpense = (expenseData : Expense[]) => {
    return(dispatch : Dispatch<ExpenseActionTypes> , getState : () => ExpenseState) => {
        dispatch(setExpense(expenseData))
    }
}