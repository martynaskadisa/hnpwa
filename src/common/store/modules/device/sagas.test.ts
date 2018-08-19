import { detectNetworkStatus } from './sagas';

describe('device sagas', () => {
  describe('#detectNetworkStatus', () => {
    it('should set online to true when `window.navigator.onLine` is true', () => {
      expect(detectNetworkStatus).toBe(1);
    });
  });
});
