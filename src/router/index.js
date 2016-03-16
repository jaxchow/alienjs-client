import React,{Component} from 'react'
import ReactRouter,{Router,Route,Link,IndexRoute,RouteHandler} from 'react-router'

import AppLayout from '../layout/'
import {RegisterViewContainer,LoginViewContainer} from '../app_modules/Passport/Passport.container'
import Dashboard from '../app_modules/Dashboard'
import UsersRouter from '../app_modules/Users'
import BooksRouter from '../app_modules/Books'


export default function AppRouter(){
  return [{
      path: '/login',
      component: LoginViewContainer
    }, {
      path:'/register',
      component: RegisterViewContainer
    },{
      path: '/',
      component: AppLayout,
      childRoutes:[{
        path:'dashboard',
        component: Dashboard
      },{
        path:'users',
        childRoutes:UsersRouter
      },{
        path:'books',
        childRoutes:BooksRouter
      }]
    },{
      path:'*',
      component:Dashboard
    }
  ]
}
