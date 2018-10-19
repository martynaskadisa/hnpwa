import { noop } from 'common/utils/noop';
import * as React from 'react';

interface IProps {
  isCollapsed?: boolean;
  onClick?: (e: React.MouseEvent<HTMLPreElement>) => any;
}

const CollapseButton: React.SFC<IProps> = ({
  isCollapsed = false,
  onClick = noop
}) => (
  <pre
    style={{
      display: 'inline-block',
      margin: 0,
      cursor: 'pointer',
      userSelect: 'none'
    }}
    onClick={onClick}
  >
    {isCollapsed ? '[+]' : '[-]'}
  </pre>
);

export default CollapseButton;
