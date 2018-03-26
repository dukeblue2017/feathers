import React, { Component } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    Pusher.logToConsole = true;

    var pusher = new Pusher('e9b17ff5257c689f876c', {
      cluster: 'us2',
      encrypted: true
    });

    var channel = pusher.subscribe('carter-channel');
    channel.bind('carter-event', function(data) {
      console.log(data)
    });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.post('localhost:8000/message')
      .then()
      .catch()
  }

  render() {
    return (
      <div className="App">
        <div className="top-bar">Feathers Chat</div>
        <div className="user-list">users</div>
        <div className="chat-box">chat-box</div>
      </div>
    );
  }
}

export default App;
