/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T21:24:50+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-23T21:24:50+08:00
* @Description: 填写表单页面
*/



import React,{Component,PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import ReactBootstrap,{Panel,Input,Button,ButtonToolbar,hasFeedback} from 'react-bootstrap'

import HelpBlock from '../../components/HelpBlock'

const FIELDS=['id','username','password','email'];



class UserForm extends Component{
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };
  render(){
    const {fields:{id,username,password,email},handleSubmit,submitting} = this.props;
    return(
      <form onSubmit={handleSubmit}>
        <Input type="hide" label="id" {...id} />
        <Input type="text" label="username" placeholder="Enter text" {...username}  help={<HelpBlock helpText="我是提示文字" className="error"/>}  hasFeedback/>
        <Input type="password" label="password" placeholder="Enter password" {...password}  hasFeedback />
        <Input type="text" label="Email Address" placeholder="Enter email" {...email}  hasFeedback />
        <ButtonToolbar>
          <Button type="reset">Reset Button</Button>
          <Button bsStyle="primary" type="submit" disable={submitting}>Submit Button</Button>
        </ButtonToolbar>
      </form>
    )
  }
}

UserForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'UsersFrom',                           // a unique name for this form
  fields: FIELDS // all the fields in your form
},state => ({ // mapStateToProps
  initialValues: state.userReducer.reduce.data // will pull state into form's initialValues
}))(UserForm);

export default class UsersFormView extends Component{
  componentWillMount(){
    let {params,data,actions}=this.props;
    if(params.id){
      actions.loadAction(params.id)
    }else{
    }
  }
  handleSubmit(values){
    //TODO:保存数据未实现
    let {actions} = this.props
    actions.saveAction(values)
  //  actions.listRoute()

  }
  render(){
    return(
        <Panel header="Users">
          <UserForm onSubmit={this.handleSubmit.bind(this)} />
        </Panel>
    )
  }
}

export default UsersFormView
