import { matchPath } from 'react-router-dom';

const HOME = '/';
const NEWEST = '/newest';
const SHOW = '/show';

export const routes = {
  home: {
    path: HOME,
    match: (url: string) => matchPath(url, { path: HOME, exact: true })
  },
  new: {
    path: NEWEST,
    match: (url: string) => matchPath(url, { path: NEWEST })
  },
  show: {
    path: SHOW,
    match: (url: string) => matchPath(url, { path: SHOW })
  }
};
