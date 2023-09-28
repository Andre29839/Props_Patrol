import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <PersistGate>
      <BrowserRouter basename="/Props_Patrol">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
