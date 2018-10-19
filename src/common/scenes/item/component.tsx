import CommentList from 'common/components/comment-list';
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
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        paddingRight: '.5em'
      }}
    >
      <CommentList id={id} />
    </div>
  </div>
);

export default Item;
