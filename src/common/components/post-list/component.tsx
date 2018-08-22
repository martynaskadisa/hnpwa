import Post from 'common/components/post';
import { noop } from 'common/utils/noop';
import * as React from 'react';

export interface IProps {
  ids: string[];
  onMount?: () => any;
}

class PostList extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = { onMount: noop };

  public componentDidMount() {
    this.props.onMount!();
  }

  public render() {
    const { ids } = this.props;

    return (
      <>
        {ids.map(id => (
          <Post key={id} id={id} />
        ))}
      </>
    );
  }
}

export default PostList;
