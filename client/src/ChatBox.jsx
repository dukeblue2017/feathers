import React, { Component } from 'react';
// import axios from 'axios';

class ChatBox extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="chat-box">
      {this.props.messages.map((message, index) => {
        return (
          <div className="message" key={index}>
            <div>{message.message}</div>
            <div>{message.senderUsername}</div>
          </div>
        )
      })}
      </div>
    );
  }
}

export default ChatBox;
