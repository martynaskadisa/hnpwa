import configureStore from '../../configure-store';
import { detectNetworkStatus } from './sagas';

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

      beforeEach(jest.resetModules);

      it('should set online to true when `window.navigator.onLine` is true', () => {
        setOnline(true);
        const store = configureStore({ device: { online: false } });

        store.runSaga(detectNetworkStatus);

        const state = store.getState();

        expect(state.device.online).toBe(true);
      });

      it('should set online to false when `window.navigator.onLine` is false', () => {
        setOnline(false);
        const store = configureStore({ device: { online: true } });

        store.runSaga(detectNetworkStatus);

        const state = store.getState();

        expect(state.device.online).toBe(false);
      });
    });
  });
});
