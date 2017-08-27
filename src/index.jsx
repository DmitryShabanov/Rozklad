import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';

import reducer from './reducers';

import './styles/global.scss';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const renderApp = () => {
  // eslint-disable-next-line
  const Router = require('./containers/router.jsx').default;
  const component = (
    <Provider store={store}>
      <AppContainer>
        <Router />
      </AppContainer>
    </Provider>
  );
  render(component, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./containers/router.jsx', () => renderApp());
}

renderApp();
