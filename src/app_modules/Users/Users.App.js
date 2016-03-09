import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import routes from './index'

ReactDOM.render(<Router path="/" routes={routes} />,document.getElementById('container'))
