import nodeFetch from 'node-fetch';

const request: typeof fetch =
  process.env.TARGET === 'browser' ? window.fetch : (nodeFetch as any);

export default request;
