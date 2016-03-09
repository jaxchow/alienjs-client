/**
* @Author: jax <jaxchow>
* @Date:   2016-02-24T09:43:05+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-24T09:43:05+08:00
* @Description: 应用头部布局区域
*/



import React from 'react'
import {Breadcrumb,BreadcrumbItem} from 'react-bootstrap'
import {Layout, Flex, Fixed} from 'react-layout-pane'

export default class Header extends React.Component{

  render() {
    return (
      <Fixed className="alienjs-header" {...this.props}>
        <a href="#/login" className="pull-right">logout</a>
        <span className="pull-right username">jaxchow</span>
        <Breadcrumb>
          <BreadcrumbItem href="#">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="">
            Library
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Data
          </BreadcrumbItem>
        </Breadcrumb>
      </Fixed>
    )
  }
}
