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

function register(values){

}

export function goRegister(){
  return dispatch => dispatch(routeActions.push('/register'))
}

export function goLogin(){
  return dispatch => dispatch(routeActions.push('/login'))
}

export function registerAction(values){
  return dispatch => dispatch(routeActions.push('/login'))
}

export function loginAction(username,password){
  return dispatch => dispatch(routeActions.push('/dashboard/'))
  /*
  return dispatch=>{
    return dispatch(username,password)
  }
  */
}
