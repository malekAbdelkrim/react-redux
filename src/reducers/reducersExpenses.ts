import { Expense } from "../types/expenses";
import { ExpenseActionTypes } from "../types/actions";

const expensesReducerDefaultState: Expense[] = [];

const expenseReducer = (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
) => {
  switch (action.type) {
    case "ADD_EXPENSES":
        return [...state ,  action.expense]
    case "REMOVE_EXPENSE":
        return state.filter((elem : Expense) => elem.id != action.id)

    case "EDIT_EXPENSE":
        return state.map((elem : Expense) => {
            if(elem.id === action.expense.id){
                return{
                    ...elem ,
                    ...action.expense
                }
            }else{
                return elem
            }
        })
    case "SET_EXPENSE":
        return action.expenses
        default :
        return state
  }
};
export default expenseReducer;