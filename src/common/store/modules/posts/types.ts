import { ItemType } from 'common/api/types';
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

export interface IdsByPage {
  [page: string]: string[] | undefined;
}

export interface IState {
  status: Status;
  byId: Record<string, IPost>;
  page: number;
  idsByPage: IdsByPage;
  commentIdsById: Record<string, string[]>;
}
