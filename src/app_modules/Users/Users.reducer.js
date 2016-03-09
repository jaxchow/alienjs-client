/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:34:45+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-23T20:35:48+08:00
*/



import { createStore, combineReducers } from 'redux';

import {
  SAVE_ITEM,
  REMOVE_ITEM,
  GET_ITEM,
  LOAD_ITEM_REQUEST,
  LOAD_ITEM_SUCCESS,
  SAVE_ITEM_STORES,
  LIST_ITEM,
  LIST_ITEM_SUCCESS
} from './Users.action'

// TODO: 调整本地数据结构
var initialState={
  stores: {},
  total:0,
  list:[],
  params:{},
  isFetching:false,
  updateAt:""
}
//TODO： 拆分reduce。update\get
function reduce(state = initialState, action) {
  switch (action.type) {
    case LIST_ITEM:
      return Object.assign({},state,{
        list:state.list.slice(action.start, action.offset)
      })
      //TODO: key 无法获取时存在BUG,返回undefined
    case GET_ITEM:
      let item=state.list.filter((it)=>{
        return it.id==action.key
      })
      let stores=Object.create(null);
      stores[action.key]=state.stores[item[0]]
      return Object.assign({},state, {
        stores:stores,
        list:item
    })
    case REMOVE_ITEM:
      return Object.assign(state, {
        list:state.list.filter((id)=> id!=action.key)
      })
    case SAVE_ITEM:
      return Object.assign(state, {
        list:state.list.concat([action.key])
      })
    case SAVE_ITEM_STORES:
      //override store data
      state.stores[action.key]=action.item
      return Object.assign(state,{
        stores: state.stores,
        list: state.list.concat([action.key])
      })
    case LOAD_ITEM_REQUEST:
      return Object.assign({}, state, {
        isFetching:true
      })
    case LOAD_ITEM_SUCCESS:
      state.stores[action.key]=action.item
      return Object.assign({}, state, {
        isFetching:false,
        stores: state.stores,
        list: [action.key]
      })
    case LIST_ITEM_SUCCESS:
      state.stores[action.key]=action.item
      return Object.assign({}, state, {
        isFetching:false,
        //TODO: store 未处理新数据
        stores: state.stores,
        list: action.list
      })
    default:
      return state;
  }
}


const userReducer = combineReducers({reduce});
export {reduce};
export default userReducer;
