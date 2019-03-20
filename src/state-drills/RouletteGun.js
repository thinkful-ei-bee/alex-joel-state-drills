import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
    message: "you're safe!",
  };
  constructor(props) {
    super(props)
    this.state = {
      message: null,
      chamber: null,
      spinningTheChamber: false
    };
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  handleButtonClick = () => {
  
    console.log('spinning the chamber');
    this.setState({
      message: "spinning the chamber and pulling the trigger! ...",
      spinningTheChamber: true
    })
    
    let timeout = setTimeout(() => {
      let random = Math.ceil(Math.random() * 8);
      
      this.setState({
        message: "spinning the chamber and pulling the trigger! ...",
        chamber: random,
        spinningTheChamber: !this.state.spinningTheChamber
      })
      
      if(this.state.chamber === this.props.bulletInChamber) {
        this.setState({
          message: "Bang!!!",
          spinningTheChamber: false
        })
      }
      if(this.state.chamber !== this.props.bulletInChamber) {
        this.setState({
          message: "you're safe!",
          spinningTheChamber: false
        })
      }
      console.log(`You spun the chamber to: ${this.state.chamber}; state.chamber: ${this.props.bulletInChamber}`)
    }, 2000);
    
  }
  render() {
    return (
      <div>
        <hr />
        <p>{this.state.message}</p>
        <button onClick={() => this.handleButtonClick()}>
          Pull the trigger
        </button>
      </div>
    )
  }
}

export default RouletteGun;