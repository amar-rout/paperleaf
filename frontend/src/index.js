import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.css"

// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// // Bootstrap icons
// import "bootstrap-icons/font/bootstrap-icons.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import './styles/media-query.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App tab="home" />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
