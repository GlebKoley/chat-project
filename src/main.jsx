import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import '../dist/output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   // <React.StrictMode>
   //       </React.StrictMode>
   <Provider store={store}>
      <App />
   </Provider>
);
