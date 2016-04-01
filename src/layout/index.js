/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:50:07+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-23T20:50:07+08:00
* @Description: App Layout container
*/



import React from 'react'
import {Layout, Flex, Fixed} from 'react-layout-pane'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import fixed from 'fixed-data-table/dist/fixed-data-table.css'

import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import styles from './styles'


export default class AppLayout extends React.Component{
  render() {
    return (
      <Layout type="column">
        <Header style={styles.header} location={this.props.location}/>
        <Flex>
            <Layout type="row" style={styles.row}>
                <Sidebar style={styles.sidebar}/>
                <Content style={styles.content}>
                   {this.props.children}
                </Content>
            </Layout>
        </Flex>
      </Layout>
    )
  }
}
