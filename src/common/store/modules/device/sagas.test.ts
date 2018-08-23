import configureStore from 'common/store/configure-store';
import createMemoryHistory from 'history/createMemoryHistory';
import { detectNetworkStatus } from './sagas';

const history = createMemoryHistory();

const setOnline = (value: boolean) =>
  Object.defineProperty(window.navigator, 'onLine', {
    value,
    configurable: true
  });

describe('device sagas', () => {
  describe('#detectNetworkStatus', () => {
    describe('browser', () => {
      beforeAll(() => {
        process.env.TARGET = 'browser';
      });

      afterAll(() => (process.env.TARGET = undefined));

      it('should set online to true when `window.navigator.onLine` is true', () => {
        setOnline(true);
        const store = configureStore(history, { device: { online: false } });

        store.runSaga(detectNetworkStatus);

        const state = store.getState();

        expect(state.device.online).toBe(true);
      });

      it('should set online to false when `window.navigator.onLine` is false', () => {
        setOnline(false);
        const store = configureStore(history, { device: { online: true } });

        store.runSaga(detectNetworkStatus);

        const state = store.getState();

        expect(state.device.online).toBe(false);
      });
    });

    describe('node', () => {
      beforeAll(() => (process.env.TARGET = 'node'));

      it('should always return true', () => {
        const store = configureStore(history, { device: { online: false } });

        store.runSaga(detectNetworkStatus);

        const state = store.getState();

        expect(state.device.online).toBe(true);
      });
    });
  });
});
