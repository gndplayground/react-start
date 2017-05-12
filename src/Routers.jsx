import React from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import PageLoading from './components/PageLoading';

const LoadableHome = Loadable({
  loader: () => import('./pages/Home'),
  LoadingComponent: PageLoading,
  delay: 200,
});

const LoadableAbout = Loadable({
  loader: () => import('./pages/About'),
  LoadingComponent: PageLoading,
  delay: 200,
});

const LoadableLogin = Loadable({
  loader: () => import('./pages/Login'),
  LoadingComponent: PageLoading,
  delay: 200,
});

const LoadablePrivate = Loadable({
  loader: () => import('./pages/Private'),
  LoadingComponent: PageLoading,
  delay: 200,
});


const Routers = props => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/private">Private</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={LoadableHome} key={Math.random()} />
      <Route path="/about" component={LoadableAbout} key={Math.random()} />
      <Route path="/login" component={LoadableLogin} key={Math.random()} />
      <PrivateRoute user={props.user} path="/private" component={LoadablePrivate} key={Math.random()} />
    </div>
  </Router>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Routers);

