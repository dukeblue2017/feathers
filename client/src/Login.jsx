import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
    e.preventDefault();
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
    e.preventDefault();
  }


  handleSubmit(e) {
    e.preventDefault();
    axios.post({
      
    })
  }


  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
          <label>
            Password
            <input value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
