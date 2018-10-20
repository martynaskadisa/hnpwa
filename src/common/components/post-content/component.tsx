import * as React from 'react';

interface IProps {
  content: string;
}

const PostContent: React.SFC<IProps> = ({ content }) => (
  <div
    style={{
      padding: '0 .5em .5em',
      marginBottom: '1em'
    }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default PostContent;
