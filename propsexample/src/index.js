import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './MyComponents/AboutUs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* the data is passed where the tag is rendered. */}
    <App firstName="Suganth" lastName="Sai" address="Chennai" visitingTime="11" name="abc" />
    <AboutUs companyName="Gavs" address="Shollinganallur" />
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
