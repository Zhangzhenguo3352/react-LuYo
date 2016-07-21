import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import router from './routes/index.js';
import 'bootstrap/dist/css/bootstrap.css';

let App = document.getElementById('app');

ReactDOM.render(
    // ���� ��һ��
    <Router routes={router} history={browserHistory}/>,App
)


