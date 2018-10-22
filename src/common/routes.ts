import { matchPath } from 'react-router-dom';

const HOME = '/';
const TOP = '/top/:page';
const NEWEST = '/newest/:page';
const SHOW = '/show/:page';
const JOBS = '/jobs/:page';
const ASK = '/ask/:page';
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
    match: (url: string) => matchPath<{ page: string }>(url, { path: NEWEST }),
    generatePath: (page: number) => `/newest/${page}`
  },
  show: {
    path: SHOW,
    match: (url: string) => matchPath<{ page: string }>(url, { path: SHOW }),
    generatePath: (page: number) => `/show/${page}`
  },
  jobs: {
    path: JOBS,
    match: (url: string) => matchPath<{ page: string }>(url, { path: JOBS }),
    generatePath: (page: number) => `/jobs/${page}`
  },
  ask: {
    path: ASK,
    match: (url: string) => matchPath<{ page: string }>(url, { path: ASK }),
    generatePath: (page: number) => `/ask/${page}`
  },
  item: {
    path: ITEM,
    match: (url: string) => matchPath<{ id: string }>(url, { path: ITEM }),
    generatePath: (id: string) => `/item/${id}`
  }
};

export type RouteNameWithPosts = keyof Pick<
  typeof routes,
  'top' | 'new' | 'show' | 'ask' | 'jobs'
>;
