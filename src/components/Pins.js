import React, { Component } from 'react'
import mapbox from 'mapbox-gl';
import './Pins.css'
import data from '../data/map.json'

export class Pins extends Component {
    render() {
        const app = this.props.app
        const map = app.state.map        

        if (map){
        
            data.features.forEach((place) => {
                const coord = [place.geometry.coordinates[0], place.geometry.coordinates[1]]
            
                const popup = new mapbox.Popup({closeButton: false})
                
                place.properties.images ?
                popup.setMaxWidth("200px") : popup.setMaxWidth("auto")
               

                popup.setHTML(
                    place.properties.images ?

                    `
                    <div class="pins">
                   
                    <div class="pb-container">
                    <img src="http://richardsaxton.org/websites/m12_landlines/landmarks/${place.properties.images}">
                    </div>
                                  
                    <h3>${place.properties.name}</h3>
                    </div>
                    
                    `               

                    :

                    `

                    <div class="pins">
                    <h3>${place.properties.name}</h3>
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
