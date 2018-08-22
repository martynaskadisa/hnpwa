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
  type: string;
  url: string;
  domain: string;
}

export interface IState {
  status: Status;
  byId: IById<IPost>;
  ids: string[];
}
