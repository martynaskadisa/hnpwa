export enum ItemType {
  Link = 'link',
  Ask = 'ask',
  Job = 'job'
}

export interface IFeedItem {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: ItemType;
  url?: string;
  domain?: string;
}

export interface Item extends IFeedItem {
  content: string;
  deleted?: boolean;
  dead?: boolean;
  comments: Item[];
  level: number;
}
