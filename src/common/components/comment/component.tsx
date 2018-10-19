import CollapseButton from 'common/components/collapse-button';
import CommentList from 'common/components/comment-list';
import * as React from 'react';

export interface IProps {
  content?: string;
  id: string;
  author?: string | null;
  timeAgo: string;
  isContentVisible?: boolean;
}

const Comment: React.SFC<IProps> = ({
  content = '',
  id,
  author,
  timeAgo,
  isContentVisible = true
}) => (
  <div
    style={{
      borderLeft: '1px solid rgb(130, 130, 130, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      padding: '.25em 0 0 .5em',
      marginLeft: '.5em'
    }}
  >
    <div
      style={{
        fontSize: '.9em',
        color: 'rgb(130, 130, 130)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <CollapseButton id={id} />
      &nbsp;
      <i>{author}</i>
      &nbsp;
      {timeAgo}
    </div>
    {isContentVisible && (
      <>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <CommentList id={id} />
      </>
    )}
  </div>
);

export default Comment;
