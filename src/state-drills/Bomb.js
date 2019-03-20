import React from 'react';

class Bomb extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0,
  //     message: 'tick',
  //   }
  // }
  // componentDidMount() {
  //   console.log('componentDidMount')
  //   this.interval = setInterval(() => {
  //     console.log('setInterval')
  //     this.setState({
  //       count: new Date()
  //     })
  //   }, 1000)
  // }
  // messageHelper() {
  //   if(this.state.message === 'tick') {
  //     return 'tock';
  //   }
  //   return 'tick';
  // }
  // handleButtonClick = () => {
  //   const newCount = this.state.count + 1;
  //   this.setState({
  //     count: newCount,
  //     message: this.messageHelper()
  //   })
  // }
  // render() {
  //   return (
  //     <div>
  //       <p>{this.state.count}</p>
  //     </div>
  //   )
  // }

  constructor(props) {
    super(props)
    this.state = { 
      count: 0, 
      timer: 15
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
    return this.state.count < this.state.timer ? 
    (<div><p>{this.state.count}</p></div>) :
    (<div><p>BOOM!</p></div>)
  }
}

export default Bomb;