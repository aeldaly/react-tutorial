import React, { Component } from 'react'

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        Hello {this.state.name} <br />
        Change name:
        <input type="text" value={this.state.name} onChange={this.handleChange} />
      </div>
    );
  }
}

export default HelloWorld