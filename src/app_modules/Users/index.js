import React from 'react'
import UsersRoutes from './Users.routes'
var  RouteUtils = require('react-router/lib/RouteUtils')

const routes = RouteUtils.createRoutesFromReactChildren(UsersRoutes)

export default routes
