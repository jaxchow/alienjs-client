import {expect} from 'chai'
import fetch from 'isomorphic-fetch'
import mockStore from '../../../utils/MockStore'

import {reduce} from '../Users.reducer'
import {saveAction,listAction,loadAction} from '../Users.action'

const URL_DOMAIN='http://localhost:8080/'

describe('users actions test', () => {

  it('should be listAction method ',(done)=>{
    var list=[{
        "email": "123456",
        "id": 121,
        "username": "jaxchow"
      },{
        "email": "234567",
        "id": 123,
        "username": "jax"
      }
    ]
    const expectedActions = [ 
    //  { type: 'LIST_ITEM', "offset": 11, "start": 1, },
      { type:'LIST_ITEM_SUCCESS',list}
    ]
    const store = mockStore({}, expectedActions,done)
    store.dispatch(listAction(1,11))
  })

  it('should be loadAction by key {1} method',(done)=>{
    const expectedActions = [
      { type: 'GET_ITEM', "key":'1'}
    ]
    const store = mockStore({}, expectedActions,done)
    store.dispatch(loadAction('1'))
  })

  it('should be saveAction method',(done)=>{
    const expectedActions = [
      { type: 'SAVE_ITEM', "item":{"id":1,"username":"jaxchow"}}
    ]
    const store = mockStore({}, expectedActions,done)
    store.dispatch(saveAction({"id":1,"username":"jaxchow"}))
  })
})
