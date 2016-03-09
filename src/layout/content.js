/**
* @Author: jax <jaxchow>
* @Date:   2016-02-24T09:41:56+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-24T09:41:56+08:00
* @Description: 功能区域布局 
*/



import React from 'react'
import {Layout, Flex, Fixed} from 'react-layout-pane'

export default class Content  extends React.Component{
  render() {
    return (
      <Flex className="content" {...this.props}>
           {this.props.children}
      </Flex>
    )
  }
}
