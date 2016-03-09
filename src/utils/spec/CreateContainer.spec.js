import assert from 'assert'
import jsdom from 'mocha-jsdom'
import createContainer from '../CreateContainer'
import {expect} from 'chai'

jsdom({
  skipWindowCheck:true
})

describe('createContainer function', function(){
  before('render createContainer()',()=>{
    createContainer()
  })

  it('check createStyles', () => {
    var styles = document.querySelector("style")
    expect(styles.nodeName).eql('STYLE')

  })
  it('check appContrainer exist',() =>{
    var appContrainer = document.querySelector(".app")
    expect(appContrainer.nodeName).eql("DIV")
  })
});
