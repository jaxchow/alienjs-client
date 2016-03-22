import React,{Component,PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import ReactBootstrap,{Panel,Input,ButtonInput} from 'react-bootstrap'

import * as Actions from './Books.action'

const FIELDS=['bookname','by','publisher','isbn','language','year','page','format'];

class BooksForm extends Component{
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };
  render(){
    const {fields,handleSubmit,submitting} = this.props;
    return(
      <form onSubmit={handleSubmit}>
        <Input type="text" label="bookname" placeholder="Enter text" {...fields.bookname} />
        <Input type="text" label="by" placeholder="Enter text" {...fields.by} />
        <Input type="text" label="publisher" placeholder="Enter text" {...fields.publisher} />
        <Input type="text" label="isbn" placeholder="Enter text" {...fields.isbn} />
        <Input type="text" label="language" placeholder="Enter text" {...fields.language} />
        <Input type="text" label="year" placeholder="Enter text" {...fields.year} />
        <Input type="text" label="page" placeholder="Enter text" {...fields.page} />
        <Input type="text" label="format" placeholder="Enter text" {...fields.format} />
        <ButtonInput type="reset" value="Reset Button" />
        <ButtonInput bsStyle="primary" type="submit" value="Submit Button"  disable={submitting}/>
      </form>
    )
  }
}

BooksForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'BooksForm',                           // a unique name for this form
  fields: FIELDS // all the fields in your form
})(BooksForm);

export default class BooksFormView extends Component{
  componentWillMount(){
    let {params,data,actions}=this.props;
    if(params.id){
      actions.loadAction(params.id)
    }else{

    }
  }
  handleSubmit(values){
    let {actions}=this.props
  //  actions.fetchSave(values)
  }
  render(){
    let {params,reduce}=this.props;
    return(
        <Panel header="添加书本">
          <BooksForm onSubmit={this.handleSubmit.bind(this)} initialValues={reduce.list[0]} />
        </Panel>
    )
  }
}


export default BooksFormView
