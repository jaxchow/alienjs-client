import fetch from 'isomorphic-fetch'
import { routeActions } from 'react-router-redux'

const URL_DOMAIN='http://localhost:4000'

//TODO: 调整命名及常量定义
export const SAVE_ITEM='SAVE_ITEM'
export const NEW_ITEM='NEW_ITEM'
export const EDIT_ITEM='EDIT_ITEM'
export const REMOVE_ITEM= 'REMOVE_ITEM'
export const GET_ITEM= 'GET_ITEM'

export const LOAD_ITEM_REQUEST= 'LOAD_ITEM_REQUEST'
export const LOAD_ITEM_SUCCESS = 'LOAD_ITEM_SUCCESS'
export const LOAD_ITEM_FAILURE = 'LOAD_ITEM_FAILURE'

export const LIST_ITEM_REQUEST = 'LIST_ITEM_REQUEST'
export const LIST_ITEM_SUCCESS = 'LIST_ITEM_SUCCESS'
export const LIST_ITEM_FAILURE = 'LIST_ITEM_FAILURE'

export const SAVE_ITEM_STORES = 'SAVE_ITEM_STORES'
export const LIST_ITEM = 'LIST_ITEM'


function getItem(key){
  return {
    type: GET_ITEM,
    key
  }
}

function removeItem(key){
  return {
    type: REMOVE_ITEM,
    key
  }
}

function saveItem(item){
  return {
    type: SAVE_ITEM,
    item
  }
}

function editItem(key){
  return {
    type: EDIT_ITEM,
    key
  }
}

function newItem(key){
  return {
    type: NEW_ITEM,
    key
  }
}

function listItem(start,offset){
  return {
    type: LIST_ITEM,
    start,
    offset
  }
}

function listItemRequest(list){
  return {
    type: LIST_ITEM_REQUEST,
    list
  }
}

function listItemSuccess(list){
  return {
    type: LIST_ITEM_SUCCESS,
    list
  }
}

function listItemFailure(list) {
  return {
    type: LIST_ITEM_FAILURE,
    list
  };
}

function loadItemFailure(key, error) {
  return {
    type: LOAD_ITEM_FAILURE,
    key,
    error
  };
}

function loadItemRequest(key) {
  return {
    type: LOAD_ITEM_REQUEST,
    key
  };
}

function saveItemStore(key,entity){
    return {
      type:SAVE_ITEM_STORE,
      key,
      entity,
    }
}

export function listAction(start,offset){
  return dispatch =>{
  //    return dispatch(listItem(start,offset))
    return fetch(`${URL_DOMAIN}/user/`)
      .then(res => res.json())
      .then(json => {
        return dispatch(listItemSuccess(json.list))
      })
      // .then(json => {
      //   return dispatch(saveItemStore(json.data))
      // })
      .catch(ex => {
        return dispatch(listItemFailure(ex))
      })
  }
}

export function loadAction(key){
  return dispatch =>{
      return dispatch(getItem(key))
  }
}


export function saveAction(item){
//  return dispatch => dispatch(saveItem(item))
  return dispatch => {
    //dispatch(loadItemRequest(key))
    console.log("saveAction",item)
    return fetch(`${URL_DOMAIN}/user/`,{
        method: 'post',
        body:JSON.stringify(item)
      })
      .then(res => res.json())
      .then(json => dispatch(loadItemSuccess(json.data.id,json.data)))
      /*
      .then(json => {
        return dispatch(saveItemStore(json.data))
      })
      */
      .catch(ex => {
        return dispatch(loadItemFailure(ex))
      })
  }
}

export function listRoute(){
  return dispatch => dispatch(routeActions.push('/Users/'))
}
