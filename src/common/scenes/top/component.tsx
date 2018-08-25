import NextPageLink from 'common/components/next-page-link';
import PostList from 'common/components/post-list';
import * as React from 'react';
import PrevPageLink from '../../components/prev-page-link';

const Top: React.SFC = () => (
  <div>
    <PostList />
    <div>
      <PrevPageLink />
      <span> | </span>
      <NextPageLink />
    </div>
  </div>
);

export default Top;
