import Post from 'common/components/post';
import * as React from 'react';

export interface IProps {
  ids: string[];
}

const PostList: React.SFC<IProps> = ({ ids }) => (
  <>
    {ids.map(id => (
      <Post key={id} id={id} />
    ))}
  </>
);

export default PostList;
