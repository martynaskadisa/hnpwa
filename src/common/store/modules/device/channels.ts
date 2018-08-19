import { noop } from 'common/utils/noop';
import { END, eventChannel } from 'redux-saga';

export const createBreakpointChannel = () =>
  eventChannel(emitter => {
    if (process.env.TARGET !== 'browser') {
      emitter(END);
      return noop;
    }

    const detect = () => window.requestAnimationFrame(emitter);

    window.addEventListener('resize', detect);

    return () => window.removeEventListener('resize', detect);
  });

export const createNetworkChannel = () =>
  eventChannel(emitter => {
    if (process.env.TARGET !== 'browser') {
      emitter(END);
      return noop;
    }

    window.addEventListener('online', emitter);
    window.addEventListener('offline', emitter);

    return () => {
      window.removeEventListener('online', emitter);
      window.removeEventListener('offline', emitter);
    };
  });
