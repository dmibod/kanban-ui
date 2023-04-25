import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth';

class Auth extends React.Component {
  onSignInClick = () => {
    let token = this.props.getToken();
    this.props.signIn(token);
    this.props.clearValue()
  };

  onSignOutClick = () => {
    this.props.signOut();
    this.props.clearValue()
  };

  render() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn-info btn-sm" title={this.props.user}>
          <i className="fa fa-fw fa-lock" />
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="btn btn-info btn-sm">
          <i className="fa fa-fw fa-unlock" />
        </button>
      );
    }
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, user: state.auth.user };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(Auth);
