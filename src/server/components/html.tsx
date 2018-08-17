import { ROOT_ID } from 'common/constants';
import * as React from 'react';

interface IProps {
  scripts?: string[];
}

const Html: React.SFC<IProps> = ({ children, scripts = [] }) => (
  <html>
    <head>
      <title>HNPWA</title>
      {scripts.map(script => (
        <script key={script} src={script} type="module" />
      ))}
    </head>
    <body>
      <div id={ROOT_ID}>{children}</div>
    </body>
  </html>
);

export default Html;
