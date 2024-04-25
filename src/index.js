import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Faq from './Faq/Faq.js';
import reportWebVitals from './reportWebVitals';
import Degree from './Degree/Degree';
import Admission from './Admission/Admission';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Admission />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
