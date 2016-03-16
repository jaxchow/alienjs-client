import React from 'react'
import PassportRoutes from './Passport.routes'

var  RouteUtils = require('react-router/lib/RouteUtils')

const routes = RouteUtils.createRoutesFromReactChildren(PassportRoutes)

export default routes
