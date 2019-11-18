import React , {Component} from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor(){
    super();
    this.state = {
        currentColor : GREEN
    };

    setInterval(() => {
        console.log(this.state.currentColor);
        this.setState({
            currentColor : this.getNextColor(this.state.currentColor)}
            );
      }, 1000);
    }

  getNextColor(color){
    switch(color){
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
      }
    }
  render(){
    return (
      <div className="App">
        <TrafficLight currentColor={this.state.currentColor} />
      </div>
    )};
}

export default App;
