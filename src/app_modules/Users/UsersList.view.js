import React,{Component,PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import ReactBootstrap,{Panel,ButtonGroup,Button,Navbar,Input} from 'react-bootstrap'
import FixedDataTable,{Table, Column, Cell} from 'fixed-data-table'

import SortHeaderCell from '../../components/SortTableCell'
import TextCell,{LinkCell} from '../../components/TextCell'

const FIELDS=['username','email'];

class SeachListForm extends Component{
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };
  render(){
    const {handleSubmit,fields,liveChange} = this.props;
    return(
      <Navbar.Form pullRight>
      <form onSubmit={handleSubmit} className="form-inline" >
        <Input type="text" label="用户名" placeholder="plase search username" {...fields.username} />
        {' '}
        <Input type="text" label="邮箱" placeholder="plase search email" {...fields.email} />
        {' '}
        <Button type="submit">搜索</Button>
      </form>
      </Navbar.Form>
    )
  }
}

SeachListForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'SeachListForm',                           // a unique name for this form
  fields: FIELDS // all the fields in your form
})(SeachListForm);


class UsersListView extends Component{
  componentWillMount(){
    let {actions}=this.props
    actions.listAction()
  }
  renderTableList(){
    let {dispatch,reduce}=this.props;
    let sortedDataList = reduce.list
    return (
      <Table
       rowHeight={40}
       rowsCount={sortedDataList.length}
       headerHeight={40}
       width={1000}
       height={360}
       {...this.props}>
     <Column
       columnKey="id"
       header={ <Cell> 编号 </Cell> }
       cell={<TextCell data={sortedDataList} col="id" />}
       width={100}
     />
     <Column
       columnKey="username"
       header={ <Cell> 用户名 </Cell> }
       cell={<TextCell data={sortedDataList} col="username"/>}
       width={200}
     />
     <Column
       columnKey="email"
       header={ <Cell> 邮箱 </Cell> }
       cell={<TextCell data={sortedDataList} col="email"/>}
       width={200}
     />
     <Column
       columnKey="email"
       header={ <Cell> 操作 </Cell> }
       cell={<LinkCell path={"#/users/edit/"} data={sortedDataList} col="id"/>}

       width={200}
     />
     </Table>
    )
  }
  renderToolbar(){
    return (
      <ButtonGroup>
         <Button bsStyle="primary" href="#/users/add">添加用户</Button>
      </ButtonGroup>
    )
  }
  renderSearchBar(){
    return (
      <SeachListForm onSubmit={this.handleSubmit.bind(this)} />
    )
  }
  handleSubmit(values){
    let {actions}=this.props
    actions.listAction(values)
  }
  handleChange(values){
    console.log(values)
  }
  render(){
    return (
        <Panel header="Users">
            {this.renderToolbar()}
            {this.renderSearchBar()}
            {this.renderTableList()}
         </Panel>
      )
  }
}


export default UsersListView
