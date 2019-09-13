import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './components/Table';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initial_state = [
    {
      "email": 'hlm@gmail.com',
      "login": 'Vlados',
	    "password": 'Vlados1'
    },
    {
      "email": 'rambler@mail.ru',
      "login": 'Canine',
	    "password": 'Canine1'
    },
    {
      "email": 'krolikbezzubov@gmail.com',
      "login": 'Boss',
	    "password": 'Boss1'
    }
]

function reducer(state = initial_state, action){
    switch (action.type) {
    case 'ADD_TABLE_ROW':
        return[...state, action.payload];
    default:
      return state;
    }
  }

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <Table/>
</Provider>, document.getElementById('root'));
