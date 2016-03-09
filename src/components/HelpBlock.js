/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T21:15:15+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-23T21:15:15+08:00
* @Description: custom HelpBlock construct support bs3
*/


import React,{Component,PropTypes} from 'react'

class HelpBlock extends Component{

  render(){
    let tipBlock;
    return(
        <span className={this.props.className}>{this.props.helpText}</span>
    )
  }
}

export default HelpBlock
