import { Expense } from "./expenses";

const ADD_EXPENSES = "ADD_EXPENSES";
const REMOVE_EXPENSE = "REMOVE_EXPENSE";
const EDIT_EXPENSE = "EDIT_EXPENSE";
const SET_EXPENSE = "SET_EXPENSE";

export interface SetExpenseAction {
  type: typeof SET_EXPENSE;
  expenses: Expense[];
}

export interface EditExpenseAction {
  type: typeof EDIT_EXPENSE;
  expense: Expense;
}

export interface RemoveExpenseAction {
  type: typeof REMOVE_EXPENSE;
  id: number;
}

export interface AddExpensesAction {
  type: typeof ADD_EXPENSES;
  expense: Expense;
}

export type ExpenseActionTypes =
  | EditExpenseAction
  | RemoveExpenseAction
  | AddExpensesAction
  | SetExpenseAction;
 