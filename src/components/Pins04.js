import React, { Component } from 'react'
import mapbox from 'mapbox-gl';
import './Pins.css'
import landmarks from '../data/landmarks.json'

export class Pins extends Component {
    render() {
        const app = this.props.app
        const map = app.state.map

        console.log(landmarks)

        

        if (map){
        
            landmarks.forEach(landmark => {
                const coord = [landmark.longitude, landmark.latitude]
            

                const popup = new mapbox.Popup()
                popup.setMaxWidth("300px")

                popup.setHTML(

                    

                    `
                    <div class="mapboxgl-popup-content-header">
                    <h3>${landmark.name}</h3>
                    </div>
                    <div class="description">
                    <img alt="${landmark.name}" src="http://richardsaxton.org/websites/m12_landlines/${landmark.image}" />
                    <a href=${landmark.url} class="card-btn">Website</a>
                    </div>
                    ` 
                )               


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
