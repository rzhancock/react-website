import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyWebsite from './MyWebsite';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <MyWebsite />, document.getElementById('root'));
registerServiceWorker();
