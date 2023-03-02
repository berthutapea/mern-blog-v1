import React from 'react';
import './App.css';
import { Routes, store } from '../config';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
