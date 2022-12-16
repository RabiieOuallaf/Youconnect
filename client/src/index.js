import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from './state/index.js';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {Key: "root", Storage, version : 1};
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
        reducer: persistReducer,
        middleware: (getDefaultMiddleware) => 
          getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
            },
          }),
        
      })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistStore}>
        <App />
      </PersistGate>
      
    </Provider>
    
  </React.StrictMode>
);

