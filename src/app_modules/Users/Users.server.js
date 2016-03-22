
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {renderToString} from 'react-dom/server'
import {Router,hashHistory} from 'react-router'
import AppRouter from './Users.routes'
import {Provider} from 'react-redux'

import store from '../../store/index'
export default renderToString(<Provider store={store} ><Router routes={AppRouter()} /></Provider>)
