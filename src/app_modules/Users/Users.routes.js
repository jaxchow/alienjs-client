import React,{Component} from 'react'
import ReactRouter,{Router,Route,IndexRoute} from 'react-router'

import {UsersListContainer,UsersFormContainer} from './Users.container'

 let UsersRoutes=(
    <Router>
      <IndexRoute component={UsersListContainer} />
      <Route path="list" components={UsersListContainer} />
      <Route path="add" component={UsersFormContainer} />
      <Route path="edit/:id" component={UsersFormContainer} />
    </Router>
)

export default UsersRoutes
