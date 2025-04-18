/**
 *
 * App.js
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store, { history } from './store';
import { SocketProvider } from './contexts/Socket';
import { SET_AUTH } from './containers/Authentication/constants';
import Application from './containers/Application';
import ScrollToTop from './scrollToTop';
import setToken from './utils/token';

// Import application sass styles
import './styles/style.scss';

// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// // react-bootstrap-table2 styles
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// rc-slider style
import 'rc-slider/assets/index.css';

// Authentication
const token = localStorage.getItem('token');

if (token) {
  // authenticate api authorization
  setToken(token);

  // authenticate routes
  store.dispatch({ type: SET_AUTH });
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <SocketProvider>
        <ScrollToTop>
          <Application />
        </ScrollToTop>
      </SocketProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
