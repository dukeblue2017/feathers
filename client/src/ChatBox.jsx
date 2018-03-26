import React, { Component } from 'react';
// import axios from 'axios';

class ChatBox extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="chat-box">
        {Array.isArray(this.props.messages) && this.props.messages.map((message, index) => {
          if (message.username === this.props.myUsername) {
            return (
              <div className="message-container-right" key={index}>
                <div className="message">
                  <div className="message-username">{message.username} {message.date && message.date.split('T').join(' ').split('.000Z').join('')}</div>
                  <div>{message.message}</div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="message-container-left" key={index}>
                <div className="message">
                  <div className="message-username">{message.username} {message.date && message.date.split('T').join(' ').split('.000Z').join('')}</div>
                  <div>{message.message}</div>
                </div>
              </div>
            );
          }
      })}
      </div>
    );
  }
}

export default ChatBox;
