import { IFeedItem } from 'common/api/types';
import { IById } from 'common/utils/types';
import { IPost } from './types';

export const normalizePosts = (posts: IFeedItem[]): IById<IPost> =>
  posts.reduce(
    (byId, post) => {
      const { comments_count: commentsCount, ...rest } = post;

      byId[post.id] = { ...rest, commentsCount };

      return byId;
    },
    {} as IById<IPost>
  );

export const extractIds = (posts: IFeedItem[]): string[] =>
  posts.map(post => post.id.toString());
