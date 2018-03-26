import React, { Component } from 'react';

class SignOut extends Component {

  render() {
    return (
      <div className="sign-out">
        <button onClick={this.props.handleSignOutClick}>Sign Out</button>
      </div>
    );
  }
}

export default SignOut;
