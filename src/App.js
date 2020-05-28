import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import HomePage from './Container/HomePage_Container';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomePage />
      </PersistGate>
    </Provider>
  );
}

export default App;
