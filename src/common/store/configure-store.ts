import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import reducer from './reducer';
import { AppState } from './types';

const middleware: Middleware[] = [];

const devTool =
  window && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : <T>(f: T): T => f;

const configureStore = (preloadedState?: AppState) => {
  const enhancedCreateStore = compose<typeof createStore>(
    applyMiddleware(...middleware),
    devTool
  )(createStore);

  return enhancedCreateStore(reducer, preloadedState!);
};

export default configureStore;
