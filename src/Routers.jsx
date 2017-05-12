import React from 'react';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


function MyLoadingComponent({ isLoading, pastDelay, error }) {
  if (isLoading && pastDelay) {
    return <p>Loading...</p>;
  } else if (error && !isLoading) {
    return <p>Error!</p>;
  }
  return null;
}

const LoadableHome = Loadable({
  loader: () => import('./pages/Home'),
  LoadingComponent: MyLoadingComponent,
  delay: 200,
});

const LoadableAbout = Loadable({
  loader: () => import('./pages/About'),
  LoadingComponent: MyLoadingComponent,
  delay: 200,
});

const Routers = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={LoadableHome} key={Math.random()} />
      <Route path="/about" component={LoadableAbout} key={Math.random()} />
    </div>
  </Router>
);


export default Routers;
