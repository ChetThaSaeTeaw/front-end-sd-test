import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "./constant/i18n";
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import { Provider } from 'react-redux';
import store  from './store.ts';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </I18nextProvider>
);
