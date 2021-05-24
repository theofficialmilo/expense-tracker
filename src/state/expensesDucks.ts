//Import Lodash Data processing library
import _ from "lodash";

//Import Types for Type Checking
import { AnyAction } from 'redux'
import {IExpense} from '../typing/expenseType'

//initalize inital state
const initialState = {
  expenseList: []
} 

//Action Types
const SET_EXPENSELIST = "expenses/SET_EXPENSES"
const GET_EXPENSELIST = "expenses/GET_EXPENSELIST"
const SET_EXPENSE = "expenses/SET_EXPENSE"
const CLEAR_EXPENSE = "expenses/CLEAR_EXPENSE"

export default function expenseReducer(state = initialState, action: AnyAction){
  switch(action.type){
    case SET_EXPENSELIST: {
      return {
        ...state,
        expenseList: action.payload
      }
    }
    case GET_EXPENSELIST: {
      return {
        ...state
      }
    }
    case SET_EXPENSE: {
      return {
        ...state,
        expenseList: [action.payload, ...state.expenseList]
      }
    }
    case CLEAR_EXPENSE: {
      return {
        ...state,
        expenseList: _.filter({...state.expenseList}, (expense: IExpense)=> 
          !_.includes(action.payload, expense.id)
        )
      }
    }
    default:
      return state
  }
}

//Action Creators
export const setExpenseList = (list: Array<IExpense>) => {
  return {
    type: SET_EXPENSELIST,
    payload: list
  }
}

export const getExpenseList = () => {
  return {
    type: GET_EXPENSELIST
  }
}

export const setExpense = (expense: IExpense) => {
  return {
    type: SET_EXPENSE,
    payload: expense
  }
}

export const clearExpense = (ids: Array<string>) => {
  return {
    type:CLEAR_EXPENSE,
    payload: ids
  }
}
