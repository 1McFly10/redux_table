import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Table.css';

class Table extends Component {
addRow(){
  let rowEmail = this.rowEmailInputFirst.value;
  let rowLogin = this.rowLoginInputSecond.value;
  let rowPassword = this.rowPasswordInputThird.value;
  let obj = {
    email: rowEmail,
    login: rowLogin,
    password: rowPassword
  }
  this.props.onAddTableRow(obj);
  this.rowEmailInputFirst.value='';
  this.rowLoginInputSecond.value='';
  this.rowPasswordInputThird.value='';
}
  render() {   
    return (
      <div className="App">
        <div className="table_wrapper">
        <table border="1px solid red">
   <caption style={{fontSize: '2rem', fontWeight: 'bold'}}>Users</caption>
   <tr>
      <th style={{padding:'0.8rem'}}>id</th>
      <th  style={{padding:'0.8rem'}}>email</th>
      <th  style={{padding:'0.8rem'}}>login</th>
      <th  style={{padding:'0.8rem'}}>password</th>
   </tr>
   {this.props.testStore.map((elem, index)=>{
      return(
        <tr><td style={{padding:'0.8rem'}}>{index+1}</td>
        <td style={{padding:'0.8rem'}}>{elem.email}</td>
        <td style={{padding:'0.8rem'}}>{elem.login}</td>
        <td style={{padding:'0.8rem'}}>{elem.password}</td></tr>)
    })}
  </table>
  </div>
  <div className="input_wrapper">
      <input type ='email' maxLength='25' placeholder="Set Email" ref = {(input)=>{this.rowEmailInputFirst = input}}/>
      <input type ='text'maxLength='25' placeholder="Set Login" ref = {(input)=>{this.rowLoginInputSecond = input}}/>
      <input type ='text' maxLength='25'placeholder="Set Password" ref = {(input)=>{this.rowPasswordInputThird = input}}/>
      <button onClick={this.addRow.bind(this)}>Add Row</button>
  </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTableRow: (obj)=>{
      dispatch({
        type: 'ADD_TABLE_ROW', 
        payload: obj
      })
    }
  })
)(Table);
