import chai,{expect} from 'chai'
import {reduce} from '../Books.reducer.js'

describe('books reducer test', () => {
  it('should return the initial state', () => {
    var expectedReduce={}
    expect(reduce(undefined, {})).to.eql(expectedReduce)
  })

  it('should return the RECEIVE_DATA state',() =>{
    var expectedReduce={
      data:[{
        id:1,
        username:'javascript'
      },{
        id:2,
        username:'html'
      },{
        id:3,
        username:'css'
      }],
      lastUpdated:""
    }
    expect(reduce({}, {
      type:'RECEIVE_DATA',
      data:[{
        id:1,
        username:'javascript'
      },{
        id:2,
        username:'html'
      },{
        id:3,
        username:'css'
      }],
      receivedAt:""
    })).to.eql(expectedReduce)
  })
  /*
  it('should return the RECEIVE_POSTS state',() =>{
    var expectedReduce={
      lists:{
        aa:1,
      },
      lastUpdated:""
    }
    expect(reduce({}, {
      type:'RECEIVE_POSTS',
      lists:{aa:1},
      receivedAt:""
    })).to.eql(expectedReduce)
  })
  */
})
