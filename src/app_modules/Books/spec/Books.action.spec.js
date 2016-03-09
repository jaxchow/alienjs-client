import chai,{expect} from 'chai'
//import expect from 'expect'
import mockStore from '../../../utils/MockStore'
import * as actions from '../Books.action'

describe('booksAction actions test',() =>{
  it('should create an action to newItem',() =>{
     const text='add'
     const expectedAction ={
       type:'NEW_ITEM',
       text:text
     }
     expect(actions.newItem(text)).to.eql(expectedAction)
  })

  it("should edit and action to editItem",()=>{
    const text='edit'
    const expectedAction ={
      type:'EDIT_ITEM',
      text
    }
    expect(actions.editItem(text)).to.eql(expectedAction)
  })


  it("should save and action to saveItem",()=>{
    const text='save'
    const expectedAction ={
      type:'SAVE_ITEM',
      text
    }
    expect(actions.saveItem(text)).to.eql(expectedAction)
  })

  it("should editAction with dispatch is edit dispatchAction",(done)=>{
    const text="aaa"
    const expectedActions = [
      { type: 'EDITITEM',text},
      { type: 'SAVEITEM',text}
    ]
    const store = mockStore(text, expectedActions, done)
    store.dispatch(actions.editAction(text))
    //expect(actions.editAction(text)).to.eql(expectedAction)
  })

  it("should fetchItem with dispatch ",(done)=>{
    const text="aaa"
    const expectedActions = [
      { type: 'RECEIVE_DATA',text},
      { type: 'STORE_DATA',text}
    ]
    const store = mockStore(text, expectedActions, done)
    store.dispatch(actions.fetchItem(text))
  })

});
