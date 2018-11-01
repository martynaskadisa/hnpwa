import NextPageLink from 'common/components/next-page-link';
import PrevPageLink from 'common/components/prev-page-link';
import { RouteNameWithPosts } from 'common/routes';
import * as React from 'react';

interface IProps {
  isSeparatorVisible: boolean;
  route: RouteNameWithPosts;
}

const Paginator: React.SFC<IProps> = ({ isSeparatorVisible, route }) => (
  <div style={{ padding: '1em' }}>
    <PrevPageLink route={route} />
    {isSeparatorVisible && <span> | </span>}
    <NextPageLink route={route} />
  </div>
);

export default Paginator;
