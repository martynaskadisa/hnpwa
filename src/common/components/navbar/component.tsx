import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Navbar: React.SFC = () => (
  <nav style={{ display: 'flex' }}>
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between',
        padding: '1em',
        margin: 0,
        width: '100%',
        backgroundColor: '#EE6F2D',
        fontFamily: 'sans-serif'
      }}
    >
      <li>
        <Link to={routes.home.path}>Hacker news</Link>
      </li>
      <li>
        <Link to={routes.new.path}>new</Link>
      </li>
      <li>
        <Link to={routes.show.path}>show</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
