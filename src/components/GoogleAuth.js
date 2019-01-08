import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            //'745975090298-bi7i72f2akkt9cglmjjsgqh0q9qo2vmt.apps.googleusercontent.com', //https://dmibod.github.io
            '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com', //http://localhost:3000
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      const profile = this.auth.currentUser.get().getBasicProfile();
      const payload = {
        id: profile.getId(),
        email: profile.getEmail(),
        name: profile.getName()
      };
      this.props.signIn(payload);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="btn btn-secondary btn-sm"
          title={this.props.profile.name}
        >
          <i className="fa fa-fw fa-google" />
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="btn btn-secondary btn-sm"
        >
          <i className="fa fa-fw fa-google" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, profile: state.auth.userProfile };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
