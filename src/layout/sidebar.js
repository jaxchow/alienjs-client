/**
* @Author: jax <jaxchow>
* @Date:   2016-02-24T09:44:27+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-24T09:44:27+08:00
* @Description: application sidebar area
*/



import React from 'react'
import {Link} from 'react-router'
import {Layout, Flex, Fixed} from 'react-layout-pane'
import {ListGroup,ListGroupItem,Thumbnail} from 'react-bootstrap'
import SideNav from './SideNav'

export default class Sidebar extends React.Component{
  render() {
    var nav = [
        {key: 'dashboard', title: 'Dashboard', 'iconClassName': 'fa fa-dashboard',path:'#dashboard'},
        {key: 'books', title: '书本管理', 'iconClassName': 'fa fa-exchange',path:'#books'},
        {key: 'users', title: '用户管理', 'iconClassName': 'fa fa-truck',path:'#users'},
    ];
    return (
      <Fixed className="sidebar" {...this.props}>
          <Layout type="column">
              <Fixed className="top-left">
                  <SideNav className="sidenav" itemType="righticon" itemHeight="32px" navigation={nav} >
                  </SideNav>
              </Fixed>
          </Layout>
      </Fixed>
    )
  }
}
