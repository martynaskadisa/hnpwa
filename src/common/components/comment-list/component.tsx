import Comment from 'common/components/comment';
import * as React from 'react';

interface IProps {
  ids: string[];
}

const CommentList: React.SFC<IProps> = ({ ids }) => (
  <>
    {ids.map(id => (
      <Comment key={id} id={id} />
    ))}
  </>
);

export default CommentList;
