import React from 'react'
import BooksRoutes from './Books.routes'

var  RouteUtils = require('react-router/lib/RouteUtils')

const routes = RouteUtils.createRoutesFromReactChildren(BooksRoutes)

export default routes
