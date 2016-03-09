import React,{Component} from 'react'
import ReactRouter,{Router,Route,IndexRoute} from 'react-router'

import {BooksListContainer,BooksFormContainer} from './Books.container'

 let BooksRoutes=(
    <Router>
      <IndexRoute component={BooksListContainer} />
      <Route path="list" components={BooksListContainer} />
      <Route path="add" components={BooksFormContainer} />
    </Router>
)

export default BooksRoutes
