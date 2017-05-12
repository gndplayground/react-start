import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  componentWillMount() {
    if (this.props.location.state && this.props.location.state.from && this.props.user && this.props.user.user) {
      this.props.history.replace(this.props.location.state.from);
    }
  }

  submit = (e) => {
    e.preventDefault();
    this.props.login('user');
  };

  render() {
    return (
      <div>
        {
          this.props.location.state && this.props.location.state.from ?
            (<p>You have to login to access the page.</p>) :
            ''
        }
        <form onSubmit={this.submit}>
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: (user) => {
    dispatch({
      type: 'USER_LOGIN',
      payload: user,
    });
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
