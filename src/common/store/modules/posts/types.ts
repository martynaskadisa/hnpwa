import { ItemType } from 'common/api/types';
import { IById } from 'common/utils/types';
import { Status } from './constants';

export interface IPost {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  commentsCount: number;
  type: ItemType;
  url: string;
  domain: string;
}

export interface IdsByPage {
  [page: string]: string[] | undefined;
}

export interface IState {
  status: Status;
  byId: IById<IPost>;
  page: number;
  idsByPage: IdsByPage;
}
