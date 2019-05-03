import React, { Component } from 'react'

class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello, stranger!"
    }
  }

  handleChange(event) {
    let greeting = event.target.value ? "Hello, " + event.target.value + "!" : "Hello, stranger!"
    this.setState({greeting})
  }

  render() {
    return (
      <div>
        <label>{this.state.greeting}</label>
        <br/>
        <input
          type="text"
          // value={this.state.greeting}
          onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default HelloWorld
