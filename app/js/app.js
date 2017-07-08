import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import MainWindow from '/components/layouts/main_layout';

React.render(
  <Provider store={store}>
  <MainWindow/>
  </Provider>,
  document.getElementById('ReactInjection'));
