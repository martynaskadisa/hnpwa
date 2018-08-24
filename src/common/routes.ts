import { matchPath } from 'react-router-dom';

const HOME = '/';
const TOP = '/top/:page';
const NEWEST = '/newest';
const SHOW = '/show';

export const routes = {
  home: {
    path: HOME,
    match: (url: string) => matchPath(url, { path: HOME, exact: true })
  },
  top: {
    path: TOP,
    match: (url: string) => matchPath<{ page: string }>(url, { path: TOP }),
    generatePath: (page: number) => `/top/${page}`
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
