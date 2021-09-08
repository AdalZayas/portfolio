import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import 'tailwindcss/tailwind.css'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta
        name="description"
        content="Hello i'm Adal Zayas and this is my portfolio 😀"
      />
      <title> Portfolio | AdalZayas </title>
      <meta property="og:title" content="Portfolio of Adal Zayas" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="aszyh.tk" />
      <meta property="og:image" content="%PUBLIC_URL%/opg.png" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
