import React, { Component } from 'react'
import './App.css';
import Map from './components/Map'
import Marker from './components/Marker'
import Pins from './components/Pins'
import Pins01 from './components/Pins01'
import Pins02 from './components/Pins02'
import Pins03 from './components/Pins03'
import Pins04 from './components/Pins04'
import Pins05 from './components/Pins05'

import Pins06 from './components/Pins06'
import Pins07 from './components/Pins07'
import Pins08 from './components/Pins08'




export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 37.57259827614173,
      longitude: -106.09388182533371
    }
  }
  render() {
    
    return (
      <div className="App">

        <Map app={this} />
        <Pins08 app={this}/>
        <Pins07 app={this}/>
        <Pins06 app={this}/>

        <Pins05 app={this}/>
        <Pins04 app={this}/>
        <Pins03 app={this}/>
        <Pins02 app={this}/>
        <Pins01 app={this}/>
        <Pins app={this}/>
        <Marker app={this}/>
        <div className="Mapoverlay">
          <h1>Landlines</h1>
          <h2>M12 Studio</h2>
        </div>
      </div>
    )
  }
}

export default App