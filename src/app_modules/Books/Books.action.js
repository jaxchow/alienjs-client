import fetch from 'isomorphic-fetch'
const URL_DOMAIN=''

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS='RECEIVE_POSTS'
export const FETCH_FAIL='FETCH_FAIL'
export const RECEIVE_DATA= 'RECEIVE_DATA'
export const STORE_DATA ='STORE_DATA'
export const NEW_ITEM ='NEW_ITEM'
export const EDIT_ITEM ='EDIT_ITEM'
export const SAVE_ITEM='SAVE_ITEM'

export function newItem(text){
  return {
    type:'NEW_ITEM',
    text
  }
}

export function editItem(text){
  return {
    type:'EDIT_ITEM',
    text
  }
}

export function saveItem(text){
  return {
    type:'SAVE_ITEM',
    text
  }
}

function fetchFail(json){
    return {
      type:'FETCH_FAIL'
    }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}
function receivePosts(json){
  return {
    type: RECEIVE_POSTS,
    lists: json.lists,
    receivedAt: Date.now()
  }
}

function receiveItem(json){
  return {
    type: RECEIVE_DATA,
    data: json.data
  }
}

function storeData(json){
  return {
    type:STORE_DATA,
    data: json.data
  }
}

export function editAction(text){
  return dispatch=>{
     dispatch(editItem(text))
     dispatch(saveItem(text))
  }
}

export function fetchPosts(params){
  return dispatch => {
    return fetch(`${URL_DOMAIN}/books.json?${params}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
      .then(json => dispatch(storeData(json)))
      .catch(err=>dispatch(fetchFail(json)))
  }
}

export function fetchItem(params){
  return dispatch =>{
    return fetch(`${URL_DOMAIN}/user.json?${params}`)
      .then(response => response.json())
      .then(json => dispatch(receiveItem(json)))
      .then(json => dispatch(storeData([json])))
      .catch(err => dispatch(fetchFail(json)))
  }
}
