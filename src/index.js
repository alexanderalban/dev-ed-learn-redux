import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

//NOTES:
//STORE -> everything that we want to store and access
//think grocery store, everything you want

//ACTION -> describes what you want to do
//think increment, think 'I'm hungry - not eating'

{// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// //REDUCER -> describes how action transforms state into next state
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// }

// //Now we can add it to the 'store'
// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// //DISPATCH -> Executes the action
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
