import { RouterState } from 'connected-react-router';
import reducer from './reducer';

export type AppState = ReturnType<ReturnType<typeof reducer>> & {
  router: RouterState;
};
