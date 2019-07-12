import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Wizard from './components/Wizard/Wizard'

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <HashRouter>
        <div className="App">
          <Dashboard />
          <Wizard />
          <Header />
        </div>
      </HashRouter>
      
    );
  }
  
}

export default App;
