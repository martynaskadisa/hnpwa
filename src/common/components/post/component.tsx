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
      <a
        target="_blank"
        rel="noopener"
        href={href}
        style={{ color: '#000', textDecoration: 'none' }}
      >
        {title}
      </a>
      <div style={{ display: 'flex', fontSize: '0.9em', color: '#828282' }}>
        by {author} {timeAgo} | {commentCount} comments
      </div>
    </div>
  </div>
);

export default Post;
