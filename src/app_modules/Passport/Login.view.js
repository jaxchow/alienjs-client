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

const FIELDS=['username','password'];

class LoginForm extends Component{
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render(){
    console.log(this.props.actions)
    const {fields:{username,password},handleSubmit,submitting,actions} = this.props
    return(
      <form onSubmit={handleSubmit}>
        <Input type="text" label="username" placeholder="Enter text"  />
        <Input type="password" label="password" placeholder="Enter text" />
        <ButtonToolbar>
          <Button bsStyle="primary" type="submit" disable={submitting}>login</Button>
          <Button bsStyle="success" onClick={actions.goRegister}> Go register</Button>
        </ButtonToolbar>
      </form>
    )
  }
}


LoginForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'LoginFrom',                           // a unique name for this form
  fields: FIELDS // all the fields in your form
})(LoginForm);

class LoginView extends Component{
  handleSubmit(values){
    let {actions} = this.props
    actions.loginAction(values)
  }
  render(){
    return (
      <Panel header="登陆">
          <LoginForm onSubmit={this.handleSubmit.bind(this)} actions={this.props.actions} />
      </Panel>
    )
  }
}

export default LoginView
