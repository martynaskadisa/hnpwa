import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import deviceSaga from './modules/device/sagas';
import reducer from './reducer';
import { AppState } from './types';

const devTool =
  process.env.TARGET === 'browser' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : <T>(f: T): T => f;

const configureStore = (preloadedState?: AppState) => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancedCreateStore = compose<typeof createStore>(
    applyMiddleware(sagaMiddleware),
    devTool
  )(createStore);

  const store = enhancedCreateStore(reducer, preloadedState!);

  sagaMiddleware.run(deviceSaga);

  return store;
};

export default configureStore;
