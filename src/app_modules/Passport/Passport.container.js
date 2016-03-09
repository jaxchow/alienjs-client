/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-03-03T11:14:41+08:00
* @description:  connect state to view props for redux
*/



import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import LoginView from './Login.view'
import RegisterView from './Register.view'

import * as actions from './Passport.action'

const mapStateToProps = (state) => {
  return {
    reduce:state.userReducer.reduce
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  }
}

let LoginViewContainer= connect(mapStateToProps,mapDispatchToProps)(LoginView)
let RegisterViewContainer= connect(mapStateToProps,mapDispatchToProps)(RegisterView)

export {LoginViewContainer,RegisterViewContainer}

export default UsersListContainer;
