import Paginator from 'common/components/paginator';
import PostList from 'common/components/post-list';
import * as React from 'react';

const Top: React.SFC = () => (
  <div>
    <PostList />
    <Paginator />
  </div>
);

export default Top;
