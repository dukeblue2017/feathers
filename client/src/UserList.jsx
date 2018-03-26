import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-list">
        <div className="header">
          <div className="green-number">{this.props.usersOnline.length}</div>
          users
        </div>
        {this.props.usersOnline.map((username, index) => {
          return <div className="user-list-entry" key={index}>{username}</div>
        })}
      </div>
    );
  }
}

export default UserList;
