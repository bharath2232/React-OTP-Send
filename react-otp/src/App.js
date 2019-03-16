import React, { Component } from 'react';
import './App.css';
import SendOtp from './components/SendOtp'

class App extends Component {
  render() {
    return (
      <div className="App">
    
          <SendOtp/>
      </div>
    );
  }
}

export default App;
