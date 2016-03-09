import { createStore, combineReducers } from 'redux';

import {RECEIVE_POSTS,REQUEST_POSTS,RECEIVE_DATA,STORE_DATA,NEW_ITEM,listAction} from './Books.action'

let initialState={}
function reduce(state = initialState, action) {
  switch (action.type) {
    case NEW_ITEM:
      return Object.assign({},state,{

      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
         lists: action.lists,
         lastUpdated: action.receivedAt
       })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
         data: action.data,
         lastUpdated: action.receivedAt
       })
     case STORE_DATA:
      console.log(action.lists)
      return Object.assign({},state,{
        entitys:action.lists
      })
    default:
      return state;
  }
}


const booksReducer = combineReducers({reduce});
export {reduce}
export default booksReducer;
