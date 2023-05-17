import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';       /*REACT version 18*/
import App from './App/index.js';
import './index.css';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );


//REACT version 18-REACT version 18-REACT version 18-REACT version 18-REACT version 18

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

