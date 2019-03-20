import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
  };
  constructor(props) {
    super(props)
    this.state = { 
      chamber: null,
      spinningTheChamber: false
    };
  }
  componentDidMount() {
    this.setState({
      chamber: this.props.bulletInChamber
    })
  }
  componentWillUnmount() {
    clearInterval(this.count)
  }
  handleButtonClick = () => {
    // const newCount = this.state.count + 1;
    console.log('spinning the chamber');
    this.setState({
      spinningTheChamber: true
    })
    
    setTimeout(() => {
      let random = Math.ceil(Math.random() * 8);
      console.log(`You spun the chamber to: ${random} state.chamber: ${this.state.chamber}`)
      
      if(random === this.state.chamber) {
        console.log('BANG! you are dead');
      }
    }, 2000);
    
  }
  render() {
    return (
      
      <button onClick={() => this.handleButtonClick()}>
        Pull the trigger
      </button>
    )
  }
}

export default RouletteGun;