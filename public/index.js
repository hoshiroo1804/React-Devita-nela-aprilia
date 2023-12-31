import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { reducer } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();