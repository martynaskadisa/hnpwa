import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  to: string;
}

const Logo: React.SFC<IProps> = ({ to }) => (
  <Link
    to={to}
    style={{
      textDecoration: 'none',
      color: '#fff',
      border: '1px solid #fff',
      width: '1.5em',
      height: '1.5em',
      display: 'block',
      verticalAlign: 'middle',
      textAlign: 'center',
      lineHeight: '1.5em'
    }}
  >
    Y
  </Link>
);

export default Logo;
