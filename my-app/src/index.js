import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'

/* let posts = [
  {id: 1, message: 'Hi!', likesCount: 10},
  {id: 2, message: 'How are you?', likesCount: 100},
  {id: 2, message: 'adas', likesCount: 1}
]
let dialogsData = [
  {id:1, name:'User1'},
  {id:2, name:'User2'},
  {id:3, name:'User3'},
  {id:4, name:'User4'},
  {id:5, name:'User5'}
]
let messagesData = [
  {id:1, message:'message1'},
  {id:2, message:'message2'},
  {id:3, message:'message3'},
  {id:4, message:'message4'},
  {id:5, message:'message5'}
] */

ReactDOM.render(
  <React.StrictMode>
    <App appState={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
