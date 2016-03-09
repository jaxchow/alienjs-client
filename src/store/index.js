import { createStore, applyMiddleware,combineReducers} from 'redux'
import {Router,hashHistory} from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import userReducer from '../app_modules/Users/Users.reducer'
import booksReducer from '../app_modules/Books/Books.reducer'

const reducers = combineReducers(Object.assign({
},{
  userReducer,booksReducer
},{
  form:formReducer,
  routing: routeReducer
}));
const reduxRouterMiddleware = syncHistory(hashHistory)
const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
  reduxRouterMiddleware,
  loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
)(createStore)

const store = createStoreWithMiddleware(reducers)
reduxRouterMiddleware.listenForReplays(store)
export default store
