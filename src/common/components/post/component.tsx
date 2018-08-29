import PostLink from 'common/components/post-link';
import * as React from 'react';
import CommentCount from '../comment-count';

export interface IProps {
  title: string;
  author: string;
  timeAgo: string;
  points: number;
  id: string;
}

const Post: React.SFC<IProps> = ({ title, author, timeAgo, points, id }) => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '.5em' }}>
    <div>
      <div
        style={{
          width: '3em',
          display: 'flex',
          justifyContent: 'center',
          color: '#828282'
        }}
      >
        {points}
      </div>
    </div>
    <div>
      <PostLink id={id}>{title}</PostLink>
      <div style={{ display: 'flex', fontSize: '0.9em', color: '#828282' }}>
        by {author} {timeAgo} |&nbsp;
        <CommentCount id={id} />
      </div>
    </div>
  </div>
);

export default Post;
