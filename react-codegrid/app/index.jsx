import React from 'react';  
import ReactDOM from 'react-dom';

import SampleComponent from './components/App';

let appNode = document.createElement('div');  
document.body.appendChild(appNode);

ReactDOM.render(<SampleComponent />, appNode);
