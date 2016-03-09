import React,{Component} from 'react'
import {Panel,Input,Button,ButtonToolbar} from 'react-bootstrap'

export default class LoginApp extends Component{
  handleSubmit(){

  }
  render(){
    return (
      <Panel header="登陆">
        <form onSubmit={this.handleSubmit}>
          <Input type="text" label="username" placeholder="Enter text"  />
          <Input type="password" label="password" placeholder="Enter text" />
          <ButtonToolbar>
            <Button bsStyle="primary" type="submit">login</Button>
            <Button bsStyle="success" type="submit">singin</Button>
          </ButtonToolbar>
        </form>
      </Panel>
    )
  }
}
