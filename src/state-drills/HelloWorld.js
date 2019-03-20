import React from 'react';

class HelloWOrld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      who: 'world'
    }
  }
  handleButtonClick = (argument) => {
    // const newCount = this.state.count + 1;
    this.setState({
      who: argument
    })
  }
  render() {
    return (
      <div>

        <p>Hello, {this.state.who}!</p>

        <button onClick={() => this.handleButtonClick('friend')}>
          friend
        </button>

        <button onClick={() => this.handleButtonClick('React')}>
          React
        </button>

        <button onClick={() => this.handleButtonClick('world')}>
          world
        </button>

      </div>
    )
  }
}

export default HelloWOrld;