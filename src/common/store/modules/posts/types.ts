import { ItemType } from 'common/api/types';
import { RouteNameWithPosts } from 'common/routes';
import { Status } from './constants';

export interface IPost {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  timeAgo: string;
  commentsCount: number;
  type: ItemType;
  url?: string;
  domain?: string;
  content?: string;
  deleted?: boolean;
  dead?: boolean;
  level?: number;
}

export interface IRouteData {
  status: Status;
  idsByPage: IdsByPage;
  page: number;
}

export type ById = Record<string, IPost>;
export type IdsByPage = Record<string | number, string[]>;
export type CommentIdsById = Record<string, string[]>;
export type VisibilityById = Record<string, boolean>;
export type DataByRoute = Record<RouteNameWithPosts, IRouteData>;

export interface IState {
  byId: ById;
  commentIdsById: CommentIdsById;
  visibilityById: VisibilityById;
  dataByRoute: DataByRoute;
}
