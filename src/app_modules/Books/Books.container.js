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

import BooksListView from './BooksList.view'
import BooksFormView from './BooksForm.view'
import * as actions from './Books.action'

const mapStateToProps = (state) => {
  return {
    reduce:state.bookReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let BooksListContainer= connect(mapStateToProps,mapDispatchToProps)(BooksListView)
let BooksFormContainer= connect(mapStateToProps,mapDispatchToProps)(BooksFormView)

export {BooksListContainer,BooksFormContainer}

export default BooksListContainer;
