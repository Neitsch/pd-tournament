import React from 'react';
import Relay from 'react-relay';
import Reindex from './Reindex';

import HomeRoute from './routes/HomeRoute';
import RootHomeComponent from './components/RootHomeComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Reindex.isLoggedIn(),
    };
  }
  render() {
    return (
      <Relay.RootContainer
        Component={RootHomeComponent}
        route={new HomeRoute}
        forceFetch
        renderLoading={() =>
          <div>Loading...</div>
        }
      />
    );
  }
}
