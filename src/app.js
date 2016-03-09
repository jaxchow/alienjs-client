/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:28:29+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-23T20:29:42+08:00
* @Description: application entry files
*/



import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router,hashHistory} from 'react-router'
import AppRouter from './router'
import {Provider} from 'react-redux'

import store from './store'
import createContainer from './utils/CreateContainer'

ReactDOM.render(<Provider store={store}><Router routes={AppRouter()} history={hashHistory} /></Provider>,createContainer())
