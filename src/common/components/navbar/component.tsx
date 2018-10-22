import Logo from 'common/components/logo';
import { routes } from 'common/routes';
import * as React from 'react';
import { Link } from 'react-router-dom';

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#fff'
};
const liStyle: React.CSSProperties = { padding: '0 0.5em' };

const Navbar: React.SFC = () => (
  <nav
    style={{
      backgroundColor: '#EE6F2D',
      padding: '1em',
      display: 'flex'
    }}
  >
    <div style={{ paddingRight: '.5em' }}>
      <Logo />
    </div>
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        width: '100%',
        backgroundColor: '#EE6F2D',
        padding: 0,
        fontFamily: 'sans-serif',
        height: '1.5em',
        alignItems: 'center'
      }}
    >
      <li style={liStyle}>
        <Link to={routes.top.generatePath(1)} style={linkStyle}>
          top
        </Link>
      </li>
      <li style={liStyle}>
        <Link to={routes.new.generatePath(1)} style={linkStyle}>
          new
        </Link>
      </li>
      <li style={liStyle}>
        <Link to={routes.show.generatePath(1)} style={linkStyle}>
          show
        </Link>
      </li>
      <li style={liStyle}>
        <Link to={routes.ask.generatePath(1)} style={linkStyle}>
          ask
        </Link>
      </li>
      <li style={liStyle}>
        <Link to={routes.jobs.generatePath(1)} style={linkStyle}>
          jobs
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
