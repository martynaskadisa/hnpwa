import * as React from 'react';

export interface IProps {
  title: string;
  author: string;
  commentCount: number;
  timeAgo: string;
  points: number;
  href: string;
}

const Post: React.SFC<IProps> = ({
  title,
  commentCount,
  author,
  timeAgo,
  href,
  points
}) => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '1em' }}>
    <div>{points}</div>
    <div>
      <a target="_blank" rel="noopener" href={href}>
        {title}
      </a>
      <div>
        <div>by {author}</div>
        <div>{timeAgo}</div>
        <div>{commentCount} comments</div>
      </div>
    </div>
  </div>
);

export default Post;
