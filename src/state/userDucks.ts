//Import Types
import * as userType from '../typing/userType'
import { AnyAction } from 'redux'

//initalize inital state
const initialState = {
  isRegistered: false,
  username: null
} 

//Action Types
const SET_USER = "uesr/SET_USER"
const GET_USER = "expenses/GET_USER"

export default function userReducer(state = initialState, action: AnyAction){
  switch(action.type){
    case SET_USER: {
      return {
        ...state,
        isRegistered: action.payload.isRegistered,
        username: action.payload.username
      }
    }
    case GET_USER: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}

//Action Creators
export const setUser = (user: userType.IUser) => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const getUser = () => {
  return {
    type: GET_USER,
  }
}