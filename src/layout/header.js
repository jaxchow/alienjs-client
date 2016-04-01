/**
* @Author: jax <jaxchow>
* @Date:   2016-02-24T09:43:05+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-24T09:43:05+08:00
* @Description: 应用头部布局区域
*/



import React from 'react'
import {Breadcrumb,BreadcrumbItem,Badge} from 'react-bootstrap'
import {Layout, Flex, Fixed} from 'react-layout-pane'

import {headerStyle} from './styles'
export default class Header extends React.Component{

  render() {
    let {location} = this.props
    let BreadcrumbItems=location.pathname.split("/").map((path)=>(<BreadcrumbItem key={path}>{path}</BreadcrumbItem>))
    return (
      <Fixed className="alienjs-header" {...this.props}>
        <a href="#/login" className="pull-right">logout</a>
        <span className="pull-right username">jaxchow<Badge>42</Badge></span>
        <Breadcrumb style={headerStyle.breadcrumb}>
          {BreadcrumbItems}
        </Breadcrumb>
      </Fixed>
    )
  }
}
