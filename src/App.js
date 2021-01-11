import React, { Component } from 'react'
import './App.css';
import Map from './components/Map'
import Marker from './components/Marker'
import Pins from './components/Pins'
import Home from './components/Home'




export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 37.57259827614173,
      longitude: -106.09388182533371,
      zoom: 8.5
    }
  }
  render() {
    
    return (
      <div className="App">
        <Map app={this} />
        <Pins app={this}/>
        <Marker app={this}/>
        <Home app={this} />
        <div className="Mapoverlay">
          <h1>Landlines</h1>
          <h2>M12 Studio</h2>
        </div>
        <div id="popup"></div>
      </div>
    )
  }
}

export default App