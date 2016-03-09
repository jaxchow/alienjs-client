import {expect} from 'chai'

import {SAVE_ITEM,REMOVE_ITEM,GET_ITEM,SAVE_ITEM_STORES} from '../Users.action'
import userReducer,{reduce} from '../Users.reducer'

describe('users reducer test', () => {

  it('should return the SAVE_ITEM',() =>{
    var initialState={
      stores:{},
      total:0,
      list:[],
      params:{},
      isFetching:false,
      updateAt:""
    }
    var expectedReduce={
      stores:{},
      total:0,
      list:['12'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    expect(reduce(initialState,{
      type:SAVE_ITEM,
      key:'12'
     })).to.eql(expectedReduce)
  })

  it('should return the REMOVE_ITEM key is 13',() =>{
    var initialState={
      stores:{},
      total:0,
      list:['12','13','14'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    var expectedReduce={
      stores:{},
      total:0,
      list:['12','14'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    expect(reduce(initialState,{
      type:REMOVE_ITEM,
      key:'13'
     })).to.eql(expectedReduce)
  })

  it('should be action SAVE_ITEM_STORES',()=>{
    var expectedReduce={
      stores:{
        '13':{ id:'13', username:'jaxchow' }
      },
      total:0,
      list:['13'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    expect(reduce(undefined,{
      type:'SAVE_ITEM_STORES',
      key:'13',
      item:{id:'13',username:'jaxchow'}
     })).to.eql(expectedReduce)
  })

  it('should be LOAD_ITEM_SUCCESS',()=>{
    var expectedReduce={
      stores:{
        '13':{ id:'13', username:'jaxchow' }
      },
      total:0,
      list:['13'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    expect(reduce(undefined,{
      type:'LOAD_ITEM_SUCCESS',
      key:'13',
      item:{id:'13',username:'jaxchow'}
     })).to.eql(expectedReduce)
  })

  it('should be GET_ITEM KEY{3}',()=>{
    var initialState={
      stores:{
        '1':{ id:'1', username:'jaxchow' },
        '2':{ id:'2', username:'mr.j' },
        '3':{ id:'3', username:'jax' },
        '4':{ id:'4', username:'xdixon' }
      },
      total:0,
      list:['1','2','3','4'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    var expectedReduce={
      stores:{
        '3':{ id:'3', username:'jax' },
      },
      total:0,
      list:['3'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    expect(reduce(initialState,{
      type:'GET_ITEM',
      key:'3'
    })).to.eql(expectedReduce)
  })

  it('should be LIST_ITEM {0,3} size {3}',()=>{
    var initialState={
      stores:{
        '1':{ id:'1', username:'jaxchow' },
        '2':{ id:'2', username:'mr.j' },
        '3':{ id:'3', username:'jax' },
        '4':{ id:'4', username:'xdixon' }
      },
      total:0,
      list:['1','2','3','4'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    var expectedReduce={
      stores:{
        '1':{ id:'1', username:'jaxchow' },
        '2':{ id:'2', username:'mr.j' },
        '3':{ id:'3', username:'jax' },
        '4':{ id:'4', username:'xdixon' }
      },
      total:0,
      list:['1','2','3'],
      params:{},
      isFetching:false,
      updateAt:""
    }
    expect(reduce(initialState,{
      type:'LIST_ITEM',
      start:0,
      offset:3
    })).to.eql(expectedReduce)
  })
})
