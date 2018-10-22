import Paginator from 'common/components/paginator';
import PostList from 'common/components/post-list';
import { RouteNameWithPosts } from 'common/routes';
import * as React from 'react';

export interface IProps {
  type: RouteNameWithPosts;
}

const Feed: React.SFC<IProps> = ({ type }) => (
  <div>
    <PostList route={type} />
    <Paginator route={type} />
  </div>
);

export default Feed;
