import React, { Component } from 'react';
import axios from 'axios';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
    e.preventDefault();
  }

  handleSubmit(e) {
    axios.post('http://localhost:8000/message', {
      message: this.state.value,
    })
      .then((res) => {
        this.setState({
          value: '',
        })
      })
      .catch((err) => {
        console.log(err)
      })
    e.preventDefault();
  }

  render() {
    return (
      <div className="chat-input">
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ChatInput;
