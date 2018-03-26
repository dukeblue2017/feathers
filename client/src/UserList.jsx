import React, { Component } from 'react';

class UserList extends Component {

  render() {
    return (
      <div className="user-list">
        <div className="header">
          <div className="green-number">{this.props.usersOnline.length}</div>
          users
        </div>
        {Array.isArray(this.props.usersOnline) && this.props.usersOnline.map((username, index) => {
          return <div className="user-list-entry" key={index}>{username}</div>
        })}
      </div>
    );
  }
}

export default UserList;
