import React, { Component } from 'react';
import Pusher from 'pusher-js';
// import axios from 'axios';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-list">
      {[<div>User1</div>,<div>User2</div>,<div>User3</div>]}
      </div>
    );
  }
}

export default UserList;
