import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';
import { persistor, store } from 'redux/configureStore';
import { ThemeProvider } from 'styled-components';
import { theme } from 'services/styles/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Props_Patrol">
          <App />
          <ToastContainer autoClose={2500} theme="dark" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
