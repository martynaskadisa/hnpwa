export enum ItemType {
  Link = 'link',
  Ask = 'ask',
  Job = 'job'
}

export interface IFeedItem {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: ItemType;
  url: string;
  domain: string;
}
