import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './figmaComponents'; // This is all of our Screens from Figma
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterClock />, document.body);
registerServiceWorker();
