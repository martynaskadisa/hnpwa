import NextPageLink from 'common/components/next-page-link';
import PrevPageLink from 'common/components/prev-page-link';
import * as React from 'react';

interface IProps {
  isSeparatorVisible: boolean;
}

const Paginator: React.SFC<IProps> = ({ isSeparatorVisible }) => (
  <div style={{ padding: '1em' }}>
    <PrevPageLink />
    {isSeparatorVisible && <span> | </span>}
    <NextPageLink />
  </div>
);

export default Paginator;
