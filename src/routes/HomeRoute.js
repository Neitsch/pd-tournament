import Relay from 'react-relay';

export default class HomeRoute extends Relay.Route {
  static queries = {
    viewer: (Component) => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('viewer')}
        }
      }
    `,
  };
  static routeName = 'HomeRoute';
}
