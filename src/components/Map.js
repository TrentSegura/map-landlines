import React, { Component } from 'react'
import './Map.css';
import mapbox from 'mapbox-gl';



export class Map extends Component {

    
    componentDidMount(){

        const app = this.props.app
        mapbox.accessToken = 'pk.eyJ1IjoibTEyLXRyZW50IiwiYSI6ImNrZ2UxcHRzcjBqZmIycnFpdzh1MzlkYXAifQ.0UqT-ST0dFdnPhuVd54T5w';
       
        var bounds = [
            [-110.113384, 35.747004], // Southwest coordinates
            [-102.113384, 39.747004] // Northeast coordinates
        ]

        var map = new mapbox.Map({
            container: 'map',
            style:  "mapbox://styles/m12-trent/ckg9xlrw62gxc19lc9hbaylmf",
            center: [app.state.longitude, app.state.latitude],
            zoom: app.state.zoom,
            minZoom: 1,
            maxZoom: 13,
            attributionControl: false,
            maxBounds: bounds
            });
        
        map.scrollZoom.disable();

        const nav = new mapbox.NavigationControl();
        map.addControl(nav, 'bottom-right');

        this.props.app.setState({
            map: map
        })


        map.on('load', function () {

            
                

            map.addSource('landlines', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [-106.14563226699829,38.08748186656206],
                            [-105.52831649780273,37.74139927315054],
                            [-105.87673326457147,37.46810043923201],
                            [-105.9272,37.1054],
                            [-105.62305748462676,37.00289111300673],
                            [-105.92538051959495,37.06187200399451],
                            [-105.4632568359375,37.189860709456596],
                            [-106.14563226699829,38.08748186656206],
                            [-106.92546844482422,37.846392577323286],
                            [-105.62305748462676,37.00289111300673],
                            [-105.4632568359375,37.189860709456596],
                            [-105.87673326457147,37.46810043923201],
                            [-106.92546844482422,37.846392577323286],
                            [-105.87673326457147,37.46810043923201],
                            [-106.14563226699829,38.08748186656206]

                            

                            ]
                        }
                    }    
                });
            
            map.addLayer({
                'id': 'lines',
                'type': 'line',
                'source': 'landlines',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
                'paint': {
                    'line-color': '#fff',
                    'line-opacity': 0.7,
                    'line-width': 1.5
                 }
            });
            
        })
    }
    
    render() { 


        return (
            <div id="map">
            </div>
        )
    }
}

export default Map
