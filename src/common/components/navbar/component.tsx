import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Navbar: React.SFC = () => (
  <nav>
    <ul>
      <li>
        <Link to={routes.home.path}>Hacker news</Link>
      </li>
      <li>
        <Link to={routes.new.path}>new</Link>
      </li>
      <li>
        <Link to={routes.home.path}>show</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
