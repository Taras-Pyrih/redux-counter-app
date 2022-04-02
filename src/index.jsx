import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index.jsx';
import { App } from './App.jsx';

const myStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);