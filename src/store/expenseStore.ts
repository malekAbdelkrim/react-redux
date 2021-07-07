import {applyMiddleware, combineReducers , createStore} from "redux";
import expenseReducer from "../reducers/reducersExpenses";
import thunk , {ThunkMiddleware} from "redux-thunk";
import {ExpenseActionTypes} from "../types/actions"
const rootExpenseReducer = combineReducers({
    expense : expenseReducer
})

export type ExpenseState = ReturnType<typeof rootExpenseReducer>

const storeExpense = createStore(rootExpenseReducer , applyMiddleware(thunk as ThunkMiddleware<ExpenseState , ExpenseActionTypes>))