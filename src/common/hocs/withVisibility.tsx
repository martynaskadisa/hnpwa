import { getComponentName } from 'common/utils/component';
import * as React from 'react';

export type VisibilityProps<T extends {}> =
  | { isVisible: false }
  | T & { isVisible: boolean };

export const withVisibility = <T extends {}>(
  Component: React.ComponentType<T>
) => {
  const wrapper: React.SFC<VisibilityProps<T>> = props => {
    if (!props.isVisible) {
      return null;
    }

    const { isVisible, ...rest } = props as any;

    return <Component {...rest} />;
  };

  wrapper.displayName = `withVisibility(${getComponentName(Component)})`;

  return wrapper;
};
