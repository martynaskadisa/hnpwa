import { createStore } from 'redux';

const configureStore = (preloadedState: any) => {
  const store = createStore({} as any, preloadedState);

  return store;
};

export default configureStore;
