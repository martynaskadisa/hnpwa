import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type Props = LinkProps;

const CommentCount: React.SFC<Props> = props => (
  <Link {...props} style={{ textDecoration: 'none', color: 'inherit' }} />
);

export default CommentCount;
