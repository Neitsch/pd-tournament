import React from 'react';
import Relay from 'react-relay';

class RootHomeComponent extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.any,
  }
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    if (this.state.loggedIn) {
      return <span>{this.props.viewer.user.id}</span>;
    }
    return <span>Pls log in</span>;
  }
}

const RootHomeComponentContainer = Relay.createContainer(RootHomeComponent, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        user {
          id
        }
      }
    `,
  },
});

export default RootHomeComponentContainer;
