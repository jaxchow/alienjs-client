import React,{Component} from 'react'
import FixedDataTable from 'fixed-data-table'

const {
  Table, Column, Cell
} = FixedDataTable

export default class TextCell extends Component{
  render() {
    var {data,rowIndex,col} = this.props;
    return (
      <Cell>
          {data[rowIndex][col]}
      </Cell>
    );
  }
}

export class LinkCell extends Component{
  render(){
    var {data,rowIndex,col,path} = this.props;
    return (
      <Cell>
          <a href={path+data[rowIndex][col]}>{data[rowIndex][col]}</a>
      </Cell>
    );

  }
}
