/**
* @Author: jaxchow
* @Date:   2016-02-23T20:23:21+08:00
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-24T09:45:41+08:00
* @Description: application layout styles
*/



import StyleSheet from 'react-style'

let Styles=StyleSheet.create({
    header:{
      color: '#fff',
    },
    row:{
      marginLeft:0,
      marginRight:0
    },
    sidebar:{
      padding: '1rem',
      background: '#2b3643',
      width: '190px',
      color: '#fff',
    },
    content:{
       background:'#ECF0F1',
    }
})

let headerStyle=StyleSheet.create({
  breadcrumb:{
    marginBottom:0
  }
})

export {headerStyle}
export default Styles
