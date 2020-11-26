import React, { Component } from 'react'
import mapbox from 'mapbox-gl';
import './Pins.css'
import history from '../data/history.json'

export class Pins extends Component {
    render() {
        const app = this.props.app
        const map = app.state.map

       

        

        if (map){
        
            history.features.forEach((historyItem) => {
                const coord = [historyItem.geometry.coordinates[0], historyItem.geometry.coordinates[1]]
            
                const popup = new mapbox.Popup()
                popup.setMaxWidth("300px")

                popup.setHTML(
                    `
                    <div class="mapboxgl-popup-content-header">
                    <h3>${historyItem.properties.Name}</h3>
                    </div>
                    ` )                


                var el = document.createElement('div');
                el.id = 'pin-marker';
                
                const marker = new mapbox.Marker(el)
                marker.setPopup(popup)
                marker.setLngLat(coord)
                marker.addTo(map)
            })
        }
        return (
            <div>
            </div>
        )      
      }
}

export default Pins
