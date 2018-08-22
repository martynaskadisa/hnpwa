import * as React from 'react';

export interface IProps {
  points: number;
  title: string;
  author: string;
  commentCount: number;
  timeAgo: string;
}

const Post: React.SFC<IProps> = ({
  points,
  title,
  commentCount,
  author,
  timeAgo
}) => (
  <div>
    <div>{points}</div>
    <div>
      <div>{title}</div>
      <div>
        <div>by {author}</div>
        <div>{timeAgo}</div>
        <div>{commentCount} comments</div>
      </div>
    </div>
  </div>
);

export default Post;
