import './App.css';
import React from 'react';

class PowerofTower extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.koza = this.koza.bind(this);
    this.saveName = this.saveName.bind(this)
  }
  
  koza () {
    let rollDice = Math.random()
    if(rollDice > 0.5) {
      alert("Zahl!")
    }else {
      alert("Kopf!")
    }
  }
  
  saveName(event) {
    this.setState({username: event.target.value})
  
  }
  render() {
    return (
      <div className="App">
        <h1>Power of Tower</h1>
        <header className="App-header">
          <p>Lets Play Tower of Power</p>
        </header>
        <body className="App-body">
        <img src='https://www.watson.ch/imgdb/f296/Qx,A,0,0,661,399,275,166,110,66/8566286878143442' className="App-logo" alt="logo" />
          <p>This is Level 1: Kopf oder Zahl</p>
          <form>
            <label>Name: </label>
            <input type="text" name="name" placeholder="enter name" onChange={this.saveName} value={this.state.name}></input>
          </form>
          <p></p>
          <button onClick={this.koza}>Lets Start!</button>
        </body>
      </div>
    );
  }

}



export default PowerofTower;
