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
  componentDidMount() {
    this.setState({
      chamber: this.props.bulletInChamber,
      message: this.props.message
    })
  }
  componentWillUnmount() {
    clearInterval(this.count)
  }
  handleButtonClick = () => {
    // const newCount = this.state.count + 1;
    console.log('spinning the chamber');
    this.setState({
      message: "spinning the chamber and pulling the trigger! ...",
      spinningTheChamber: true
    })
    
    setTimeout(() => {
      let random = Math.ceil(Math.random() * 8);
      
      console.log(`You spun the chamber to: ${random} state.chamber: ${this.state.chamber}`)
      
      if(random === this.state.chamber) {
        this.setState({
          message: "Bang!!!",
          spinningTheChamber: false
        })
      }

      if(random !== this.state.chamber) {
        this.setState({
          message: "you're safe!",
          spinningTheChamber: false
        })
      }

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