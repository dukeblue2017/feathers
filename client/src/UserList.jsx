import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-list">
        {this.props.usersOnline.map((username, index) => {
          return <div key={index}>{username}</div>
        })}
      </div>
    );
  }
}

export default UserList;
