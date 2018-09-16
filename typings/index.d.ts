declare module '*/webpack-assets.json' {
  interface Assets {
    [chunkName: string]: {
      js: string;
    }
  }

  const content: Assets;

  export = content;
}

declare module 'loadable-components/server' {
  import { ReactNode } from 'react';
  interface LoadableState {
    getScriptTag: () => string;
    getScriptContent: () => string;
    getScriptElement: () => string;
  }

  export const getLoadableState: (node: ReactNode) => Promise<LoadableState>;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production';
    HOST?: string;
    PORT?: string;
    TARGET?: 'browser' | 'node';
  }
}

declare interface Window {
  __PRELOADED_STATE__?: any;
  __REDUX_DEVTOOLS_EXTENSION__?: () => <T>(createStore: T) => T;
}
