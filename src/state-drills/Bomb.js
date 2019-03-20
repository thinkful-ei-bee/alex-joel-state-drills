import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 0, 
      timer: 8
    };
  }
  componentDidMount() {
    
    this.interval = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    if (this.state.count % 2 === 0 && this.state.count < this.state.timer) {
      return (<div><p>tick</p></div>);
    }
    if (this.state.count % 2 !== 0 && this.state.count < this.state.timer) {
      return (<div><p>tock</p></div>);
    }
    if (this.state.count >= this.state.timer) {
      clearInterval(this.interval)
      return (<div><p>BOOM!</p></div>);
    }
  }
}

export default Bomb;