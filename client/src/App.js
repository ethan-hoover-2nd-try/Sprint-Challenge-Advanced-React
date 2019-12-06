import React, {Component} from 'react';
import NavBar from './components/NavBar';
import PlayerList from './components/PlayerList';
import './App.scss';

class App extends Component {
  constructor(){
    super();

    this.state = {
      players: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(data => {
      this.setState({players: data});
      console.log(this.state.players);
    });
  }

  render(){

    if(!this.state.players.length){
      return (
        <h2>Loading...</h2>
      )
    }

    return (
      <div className='App'>
        <NavBar title="Women's World Cup" />
        <div className='labels'>
          <h2>Name </h2>
          <h3>Country </h3>
          <h3>Searches </h3>
        </div>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;