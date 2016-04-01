/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:34:45+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-23T20:35:48+08:00
*/



import { createStore, combineReducers } from 'redux';

import {
  CONSTANTS
} from './Passport.action'

// TODO: 调整本地数据结构
let initialState={
  authID: '',
  loginTime:'',
  expiresTime:''
}
//TODO： 拆分reduce。update\get
function reduce(state = initialState, action) {
  let {map}=state
  switch (action.type) {
    case CONSTANTS.AUTH_VERIFY:
    case CONSTANTS.AUTH_FAILURE:
      return Object.assign(state,{
        code:action.code
      })
    case CONSTANTS.AUTH_SUCCESS:
      return Object.assign(state,{
        authID:action.authID,
        loginTime:action.loginTime,
        expiresTime:action.expiresTime
      })
    default:
      return state;
  }
}

//const userReducer = combineReducers({reduce});
export {reduce,initialState};
export default reduce;
