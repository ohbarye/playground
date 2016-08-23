import React from 'react';  
import ReactDOM from 'react-dom';

import SampleComponent from './components/App';
import TextInputComponent from './components/TextInputComponent';

let appNode = document.createElement('div');  
document.body.appendChild(appNode);

ReactDOM.render(<TextInputComponent />, appNode);
