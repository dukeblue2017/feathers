import React, { Component } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';
import UserList from './UserList';
import ChatBox from './ChatBox';
import ChatInput from './ChatInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      usersOnline: [],
    };
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const pusher = new Pusher('e9b17ff5257c689f876c', {
      cluster: 'us2',
      encrypted: true
    });
    const channel = pusher.subscribe('message-channel');
    channel.bind('message-event', (data) => {
      this.setState({
        messages: this.state.messages.concat(data),
      })
    });
    const channelTwo = pusher.subscribe('user-channel');
    channelTwo.bind('user-event', (data) => {
      console.log('data', data)
      this.setState({
        usersOnline: this.state.usersOnline.concat(data.userNowOnline),
      })
    });
    this.fetchUsers();
  }


  onClick() {
  }

  fetchMessages() {
    axios.post('http://localhost:8000/messages')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  fetchUsers() {
    axios.get('http://localhost:8000/users')
      .then((res) => {
        if (res.data) {
          this.setState({
            usersOnline: res.data,
          });
        }
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="top-bar">Feathers Chat
          <button onClick={this.onClick}>Test</button>
        </div>
        <UserList usersOnline={this.state.usersOnline} />
        <ChatBox messages={this.state.messages}/>
        <ChatInput />
      </div>
    );
  }
}

export default App;
