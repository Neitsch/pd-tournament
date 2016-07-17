import ReactDOM from 'react-dom';
import React from 'react';
import Relay from 'react-relay';
import Reindex from './Reindex';

import App from './app';

Relay.injectNetworkLayer(Reindex.getRelayNetworkLayer());

ReactDOM.render(
  <App />,
  document.getElementById('example')
);
