/**
* @Author: jax <jaxchow>
* @Date:   2016-03-08T09:26:47+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-03-08T09:26:47+08:00
* @Description: login view
*/



import React,{Component,PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {Panel,Input,Button,ButtonToolbar} from 'react-bootstrap'
import {registerAction} from './Passport.action'

const FIELDS=['username','password','email'];

class RegisterForm extends Component{
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render(){
    const {fields:{username,password},handleSubmit,submitting} = this.props
    return(
      <form onSubmit={handleSubmit}>
        <Input type="text" label="username" placeholder="Enter text"  />
        <Input type="password" label="password" placeholder="Enter text" />
        <Input type="text" label="email" placeholder="Enter text" />
        <ButtonToolbar>
          <Button bsStyle="primary" type="submit" disable={submitting}>Register</Button>
        </ButtonToolbar>
      </form>
    )
  }
}


RegisterForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'RegisterForm',                           // a unique name for this form
  fields: FIELDS // all the fields in your form
})(RegisterForm);

class RegisterView extends Component{
  handleSubmit(values){
    let {actions}=this.props
    actions.goLogin()
  }
  render(){
    return (
      <Panel header="Register User">
          <RegisterForm onSubmit={this.handleSubmit.bind(this)} />
      </Panel>
    )
  }
}

export default RegisterView
