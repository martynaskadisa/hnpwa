import * as React from 'react';

export interface IProps {
  rank?: number | null;
  title: string;
  author: string;
  commentCount: number;
  timeAgo: string;
  points: number;
  href: string;
}

const Post: React.SFC<IProps> = ({
  rank,
  title,
  commentCount,
  author,
  timeAgo,
  href
}) => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '1em' }}>
    <div>{rank}</div>
    <div>
      <a target="_blank" href={href}>
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
