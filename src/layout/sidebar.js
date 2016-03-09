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
               {/*
              <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
                 <h3>jaxchow</h3>
                 <p>管理员</p>
               </Thumbnail>
                <ListGroup>
                  <ListGroupItem href="#/users" active>用户管理</ListGroupItem>
                  <ListGroupItem href="#/books">书本管理</ListGroupItem>
                  <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
                </ListGroup>
                */}
                  <SideNav className="sidenav" itemType="righticon" itemHeight="32px" navigation={nav} >
                  </SideNav>
              </Fixed>
          </Layout>
      </Fixed>
    )
  }
}
