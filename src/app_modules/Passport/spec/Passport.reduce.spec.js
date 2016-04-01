
import {expect} from 'chai'
import {CONSTANTS} from '../Passport.action'
import {reduce,initialState} from '../Passport.reducer'

describe('passport reducer test', () => {
  it('should be undefined',()=>{
    expect(reduce(initialState,{type:undefined}))
    .to.eql(initialState)
  })

  it('should be auth success',()=>{
    let authObject={
      authID:'abdcdfe',
      loginTime:'2015-12-12',
      expiresTime:'2015-12-12'
    }
    expect(reduce(initialState,{ type:CONSTANTS.AUTH_SUCCESS, ...authObject }))
    .to.eql(authObject)
  })

})
