import React, { Component } from 'react';
// import axios from 'axios';

class ChatBox extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="chat-box">
        {this.props.messages.map((message, index) => { return (
          <div className="message-container" key={index}>
            <div className="message">
              <div className="message-username">{message.senderUsername}</div>
              <div>{message.message}</div>
            </div>
          </div>
        );
      })}
      </div>
    );
  }
}

export default ChatBox;
