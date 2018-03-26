import React, { Component } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';
import UserList from './UserList';
import ChatBox from './ChatBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    // Pusher.logToConsole = true;
    const pusher = new Pusher('e9b17ff5257c689f876c', {
      cluster: 'us2',
      encrypted: true
    });

    const channel = pusher.subscribe('message-channel');
    const that = this;
    channel.bind('message-event', function(data) {
      console.log(data);
      that.setState({
        messages: that.state.messages.concat(data),
      })
    });
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    console.log('this.state', this.state)
  }

  handleClick() {
    axios.post('http://localhost:8000/message')
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="top-bar">Feathers Chat
          <button onClick={this.handleClick}>handleClick</button>
        </div>
        <UserList />
        <ChatBox />
      </div>
    );
  }
}

export default App;
