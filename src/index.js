import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const sections = [
  {
    index: 0,
    section: 'section--home',
    nav: 'home'
  },
  {
    index: 1,
    section: 'section--about',
    nav: 'about'
  },
  {
    index: 2,
    section: 'section--portfolio',
    nav: 'career'
  },
  {
    index: 3,
    section: 'section--contact',
    nav: 'contact'
  }]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App sections={sections}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
