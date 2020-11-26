import React, { Component } from 'react'
import mapbox from 'mapbox-gl';
import './Pins.css'
import ufos from '../data/ufo.json'

export class Pins extends Component {
    render() {
        const app = this.props.app
        const map = app.state.map


        console.log(ufos)

        if (map){
        
            ufos.features.forEach((ufo) => {
                const coord = [ufo.geometry.coordinates[0], ufo.geometry.coordinates[1]]
            

                const popup = new mapbox.Popup()
                popup.setMaxWidth("300px")

                popup.setHTML(
                    `
                    <div class="mapboxgl-popup-content-header">
                    <h3>${ufo.properties.Name}</h3>
                </div>
                <div class="description">    
                    ${ufo.properties.description}
        
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
