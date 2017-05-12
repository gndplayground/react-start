import React from 'react';
import { Provider } from 'react-redux';
import { store, sagaMiddleware } from './store';
import './index.css';
import rootSagas from './sagas';
import Routers from './Routers';

sagaMiddleware.run(rootSagas);

const App = () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);

export default App;
