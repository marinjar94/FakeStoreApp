import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './_layout';

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}