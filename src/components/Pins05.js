import React, { Component } from 'react'
import mapbox from 'mapbox-gl';
import './Pins.css'
import mtns from '../data/mtns.json'

export class Pins extends Component {
    render() {
        const app = this.props.app
        const map = app.state.map


        

        if (map){
        
            mtns.features.forEach((landItem) => {
                const coord = [landItem.geometry.coordinates[0], landItem.geometry.coordinates[1]]
            

                const popup = new mapbox.Popup()
                popup.setMaxWidth("300px")

                popup.setHTML(
                    `
                    <div class="mapboxgl-popup-content-header">
                    <h3>${landItem.properties.Name}</h3>
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
