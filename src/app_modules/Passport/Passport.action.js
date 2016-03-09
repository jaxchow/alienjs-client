import fetch from 'isomorphic-fetch'
import {routeActions} from 'react-router-redux'
const URL_DOMAIN='http://localhost:4000'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SIGINT = 'SIGINT'

function login(username,password){
  return {
    type : LOGIN,
    username,
    password
  }
}

export function loginAction(username,password){
  return dispatch => dispatch(routeActions.push('/dashboard/'))
  /*
  return dispatch=>{
    return dispatch(username,password)
  }
  */
}
