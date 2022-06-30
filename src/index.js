import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const alert_ext=()=>{

  alert("Vergiss nicht den Error zu reparieren, falls du package.lock.json file löschst denk dran die Modules wie react-coco hub zu installieren")


}
root.render(
  <React.StrictMode>
    <App onChange={alert_ext()} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
