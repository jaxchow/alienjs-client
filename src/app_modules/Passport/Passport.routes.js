import ReactRouter,{Router,Route,IndexRoute} from 'react-router'
import {RegisterViewContainer,LoginViewContainer} from './Passport.container'

 let PassportRoutes=(
    <Router>
      <IndexRoute component={LoginViewContainer} />
      <Route path="list" components={RegisterViewContainer} />
      <Route path="add" components={LoginViewContainer} />
    </Router>
)

export default PassportRoutes
