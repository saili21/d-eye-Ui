import React from 'react';
import ReactDOM from 'react-dom';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/font-awesome/css/font-awesome.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
