import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Handler access to a route
const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => {
        if (user && user.user) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  location: PropTypes.string,
  user: PropTypes.object.isRequired,
};

export default PrivateRoute;
