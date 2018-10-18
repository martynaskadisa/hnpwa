import CommentList from 'common/components/comment-list';
import * as React from 'react';

export interface IProps {
  content?: string;
  id: string;
}

const Comment: React.SFC<IProps> = ({ content = '', id }) => (
  <div
    style={{
      borderLeft: '1px solid #EE6F2D',
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '.5em',
      marginLeft: '.5em'
    }}
  >
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <CommentList id={id} />
  </div>
);

export default Comment;
