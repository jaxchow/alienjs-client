import React,{Component,PropTypes} from 'react'
import ReactBootstrap,{Panel,ButtonGroup,Button,Navbar,Input} from 'react-bootstrap'
import FixedDataTable,{Table, Column, Cell} from 'fixed-data-table'

import PageViewComponent from '../../components/PageViewComponent'
import SortHeaderCell from '../../components/SortTableCell'
import TextCell,{LinkCell} from '../../components/TextCell'

class BooksListView extends PageViewComponent{
  componentWillMount(){
    let {actions}=this.props;
    actions.listAction()
  }
  rowGetter(rowIndex){
    let {reduce}=this.props;
    return reduce.lists[rowIndex]
  }
  rowItemClick(event,rowIndex,data){
    console.log(data)
  }
  renderToolbar(){
    return (
      <ButtonGroup>
         <Button bsStyle="primary" href="#/books/add">添加书本</Button>
      </ButtonGroup>
    )
  }
  renderSearchBar(){
    return (
      <Navbar.Form pullRight>
        <Input type="text" placeholder="Search"/>
        {' '}
        <Button type="submit">搜索</Button>
      </Navbar.Form>
    )
  }
  renderTableList(){
    let {reduce}=this.props;
    let sortedDataList = reduce.list || []
    return (
      <Table
       rowHeight={40}
       rowsCount={sortedDataList.length}
       headerHeight={40}
       width={1000}
       height={560}
       {...this.props}>
     <Column
       columnKey="id"
       fixed={true}
       header={<Cell>编号</Cell>}
       cell={<TextCell data={sortedDataList} col="id" />}
       width={50}
     />
     <Column
       columnKey="bookname"
       fixed={true}
       flexGrow={2}
       header={<Cell>名称</Cell>}
       cell={<TextCell data={sortedDataList} col="bookname"/>}
       width={200}
     />
     <Column columnKey="publisher"
       header={<Cell> 出版社 </Cell>}
       flexGrow={1}
       fixed={true}
       cell={<TextCell data={sortedDataList} col="publisher"/>}
       width={200}
     />
     <Column columnKey="by"
       header={<Cell> 作者 </Cell>}
       fixed={true}
       cell={<TextCell data={sortedDataList} col="by"/>}
       width={200}
     />
     <Column columnKey="isbn"
       header={<Cell> ISBN </Cell>}
       fixed={true}
       cell={<TextCell data={sortedDataList} col="isbn"/>}
       width={200}
     />
     <Column columnKey="isbn"
       header={<Cell> 操作 </Cell>}
       fixed={true}
       cell={<LinkCell data={sortedDataList} path="#/books/edit/" col="id"/>}
       width={200}
     />
     </Table>
    )
  }
  render(){
    return (
      <Panel header="书本管理">
          {this.renderToolbar()}
          {this.renderSearchBar()}
          {this.renderTableList()}
      </Panel>
    )
  }
}


export default BooksListView
