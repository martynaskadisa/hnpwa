import { matchPath } from 'react-router-dom';

const HOME = '/';
const TOP = '/top/:page';
const NEWEST = '/newest';
const SHOW = '/show';
const ITEM = '/item/:id';

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
  },
  item: {
    path: ITEM,
    match: (url: string) => matchPath<{ id: string }>(url, { path: ITEM }),
    generatePath: (id: string) => `/item/${id}`
  }
};
