import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface IProps extends LinkProps {
  style?: never;
  external?: boolean;
}

const PostLink: React.SFC<IProps> = ({ external = false, ...rest }) =>
  external ? (
    <a
      {...rest}
      href={rest.to.toString()}
      style={{ color: '#000', textDecoration: 'none' }}
    />
  ) : (
    <Link {...rest} style={{ color: '#000', textDecoration: 'none' }} />
  );

export default PostLink;
