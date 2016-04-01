import fetch from 'isomorphic-fetch'
import ActionRouter from '../../utils/ActionRouterUtils'
const URL_DOMAIN='http://localhost:8080'

export const CONSTANTS={
  LOGIN:'LOGIN',
  LOGOUT:'LOGOUT',
  SIGIN:'SIGIN',
  AUTH_FAILURE:'AUTH_FAILURE',
  AUTH_PROCESS:'AUTH_PROCESS',
  AUTH_SUCCESS:'AUTH_SUCCESS',
  AUTH_VERIFY:'AUTH_VERIFY'
}

function login(username,password){
  return {
    type : CONSTANTS.LOGIN,
    username,
    password
  }
}

function processAuthSuccess(json){
  return {
    type:CONSTANTS.AUTH_SUCCESS,
    authID:json.authID,
    loginTime:json.loginTime,
    expiresTime:json.expiresTime
  }
}

function processAuthFailure(ex){
  return {
    type:CONSTANTS.AUTH_FAILURE,
    ex
  }
}

export function doLogin(username,password){
  return dispatch => fetch(`${URL_DOMAIN}/passport/auth`,{
    method:'post',
    body:JSON.stringify({username:username,password:password})
  })
  .then(res => {
    if(res.status==200){
      return res.json()
    }else{
      dispatch(processAuthFailure("auth failure"))
    }
  })
  .then(json => {
    dispatch(processAuthSuccess(json))
  })
  .catch(ex => {
    return dispatch(processAuthFailure(ex))
  })
}

export function goRegister(){
  return dispatch => dispatch(ActionRouter.push('/register'))
}

export function goLogin(){
  return dispatch => dispatch(ActionRouter.push('/login'))
}

export function registerAction(values){
  return dispatch => dispatch(ActionRouter.push('/login'))
}

export function loginAction(username,password){
  return dispatch => dispatch(ActionRouter.push('/dashboard/'))
  /*
  return dispatch=>{
    return dispatch(username,password)
  }
  */
}
