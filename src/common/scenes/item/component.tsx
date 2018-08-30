import Post from 'common/components/post';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps<{ id: string }>;

const Item: React.SFC<Props> = ({
  match: {
    params: { id }
  }
}) => (
  <div>
    <Post id={id} />
  </div>
);

export default Item;
