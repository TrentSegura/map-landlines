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
            maxBounds: bounds,
            maxPitch: 0
            });
        
        map.scrollZoom.disable();
        map.dragRotate.disable();

        const nav = new mapbox.NavigationControl({showCompass: false});
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

                map.addSource('landlines_02', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                [-105.8802, 37.47003],
                                [-106.395308, 38.156109],

                                [-105.8030248, 37.4387868],
                                [-105.7751294, 37.8610774],
                                [-106.343021, 37.483711],
                                [-105.485845, 37.577227],
                                [-105.71185, 37.5624097],
                                [-106.0061045, 37.0813142],
                                [-105.50844, 37.2018328],
                                [-105.3037139, 37.1708966],
                                [-106.446874, 37.180592],
                                [-105.967201, 37.2523465],
                                [-106.0145866, 37.0682267],
                                [-105.756397, 38.219443],
                                [-105.485845, 37.577227],

                                [-106.9270182, 37.8524283],
                                [-105.5766752, 37.9647221],
                                [-106.144555, 37.7053787],
                                [-106.395308, 38.156109],

                                [-105.485845, 37.577227],
                                [-105.185562, 37.122242],
                                [-106.0120421, 37.0695753],
                                [-105.538821, 37.0087478],
                                [-105.50844, 37.2018328],

                                [-105.708341, 38.181665],
                                [-106.0195233, 37.0889665],
                                [-106.0982963, 37.57567068],
                                [-105.3817417, 37.1632865],
                                [-105.34942, 37.1023933],
                                [-105.538821, 37.0087478],
                                [-105.4017778, 37.161291],
                                [-105.7601643, 37.1758258],
                                [-105.8039061, 37.0883485],
                                [-106.395308, 38.156109],

                                [-105.50844, 37.2018328],

                                [-105.9543787, 37.2692066],
                                [-105.9625843, 37.2673151],
                                [-105.4232256, 37.19495],
                                [-106.021131, 37.0895978],
                                [-105.9383974, 37.1738101],
                                [-105.6381091, 37.1070479],
                                [-105.925847, 38.168888],
                                [-105.538821, 37.0087478],
                                [-106.1452239, 37.5802683],
                                [-106.1478584, 37.4854201],
                                [-105.440843, 37.584727],
                                [-106.0125112, 37.0665782],
                                [-106.377438, 37.81153],
                                [-106.395308, 38.156109],

                                [-105.4825, 37.684444],
                                [-106.0201384, 37.0882914],
                                [-106.2831855, 37.8853526],
                                [-106.402259, 37.496672],
                                [-105.423947, 37.1870506],
                                [-106.0869615, 38.4222204],
                                [-105.669057, 38.029831],
                                [-105.50844, 37.2018328],

                                [-105.798997, 37.0102369],
                                [-106.3517466, 37.677862],
                                [-106.3910874, 37.6841884],
                                [-105.8806504, 37.4746242],
                                [-105.538821, 37.0087478],
                                [-106.1422211, 38.0865794],
                                [-106.7744601, 37.8932822],
                                [-105.700031, 37.2475],
                                [-105.72043429025392, 37.700291157533535],
                                [-105.4322236, 37.1982982],
                                [-105.86434, 37.4690816],
                                [-105.9052376, 37.2570629],
                                [-105.4250832, 37.1995721],
                                [-105.866622, 37.4695302],
                                [-105.8699725, 37.469045],
                                [-105.375206, 37.1625302],
                                [-106.594312, 37.432341],
                                [-106.1367344, 38.0869551],
                                [-106.395308, 38.156109],
                                [-105.8872121, 37.7885473],
                                [-106.9280215, 37.8578061],
                                [-106.708662, 38.094099],
                                [-105.6839004, 36.9375203],
                                [-106.053085, 38.298593],
                                [-106.783653, 37.881721],
                                [-105.50844, 37.2018328],

                                [-105.5530687, 37.6188923],
                                [-105.99506378173827, 37.276238364942955]
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
                    'line-opacity': 0.6,
                    'line-width': 1.5
                 }
            });

            map.addLayer({
                'id': 'lines-02',
                'type': 'line',
                'source': 'landlines_02',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
                'paint': {
                    'line-color': '#f9dec2',
                    'line-opacity': 0.25,
                    'line-width': 1
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
