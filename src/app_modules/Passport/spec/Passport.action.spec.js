import {expect} from 'chai'
import fetch from 'isomorphic-fetch'
import {createStore,compose, applyMiddleware,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import mockStore from '../../../utils/MockStore'
import createStoreWithMiddleware from '../../../utils/CreateSotre'
import {reduce} from '../Passport.reducer'
import {CONSTANTS,doLogin} from '../Passport.action'

const URL_DOMAIN='http://localhost:8080/'
const store = createStoreWithMiddleware(reduce)

describe('books actions test', () => {
  it('should be doLogin by test,test',(done)=>{
    let authObj={
      authID:"a232Bd3432",
      loginTime:1459227790173,
      expiresTime:1459217790173
    }
    const expectedActions = [
      {type :CONSTANTS.AUTH_SUCCESS, ...authObj},
    ]
    const mkStore = mockStore(store.getState(), expectedActions,done)
    mkStore.dispatch(doLogin("test","test"))
  })
})
