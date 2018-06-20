import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto';
import 'typeface-open-sans-condensed';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
