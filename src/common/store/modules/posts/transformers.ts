import { IFeedItem, Item } from 'common/api/types';
import { IById } from 'common/utils/types';
import { IPost } from './types';

export const normalizeItem = (item: Item): IPost => {
  const {
    comments_count: commentsCount,
    time_ago: timeAgo,
    comments,
    ...rest
  } = item;

  return { ...rest, commentsCount, timeAgo };
};

export const normalizeFeedItem = (item: IFeedItem): IPost => {
  const { comments_count: commentsCount, time_ago: timeAgo, ...rest } = item;

  return { ...rest, commentsCount, timeAgo };
};

export const normalizePosts = (posts: IFeedItem[]): IById<IPost> =>
  posts.reduce(
    (byId, post) => {
      byId[post.id] = normalizeFeedItem(post);

      return byId;
    },
    {} as Record<string, IPost>
  );

interface INormalizeCommentsReturn {
  byId: IById<IPost>;
  idsByItemId: Record<string, string[]>;
}

export const normalizeComments = (item: Item): INormalizeCommentsReturn =>
  item.comments.reduce(
    ({ byId, idsByItemId }, comment) => {
      byId[comment.id] = normalizeItem(comment);
      idsByItemId[comment.id] = comment.comments.map(x => x.id.toString());

      const next = normalizeComments(comment);
      return {
        byId: { ...byId, ...next.byId },
        idsByItemId: { ...idsByItemId, ...next.idsByItemId }
      };
    },
    { byId: {}, idsByItemId: {} } as INormalizeCommentsReturn
  );

export const extractIds = (posts: IFeedItem[]): string[] =>
  posts.map(post => post.id.toString());
