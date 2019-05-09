import React from 'react';
import ReactDOM from 'react-dom';

import App from '../public/App';
import * as serviceWorker from '../public/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
