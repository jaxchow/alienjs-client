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
import {connect} from 'react-redux';

import UsersListView from './UsersList.view'
import UsersFormView from './UsersForm.view'
import * as actions from './Users.action'

const mapStateToProps = (state) => {
  return {
    reduce:state.userReducer.reduce
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let UsersListContainer= connect(mapStateToProps,mapDispatchToProps)(UsersListView)
let UsersFormContainer= connect(mapStateToProps,mapDispatchToProps)(UsersFormView)

export {UsersListContainer,UsersFormContainer}

export default UsersListContainer;
