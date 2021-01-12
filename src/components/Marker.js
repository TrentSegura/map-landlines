import React, { Component } from 'react'
import mapbox from 'mapbox-gl' 
import './Marker.css';
import data from '../data/landlines.json'



export class Marker extends Component {


    render() {
        const app = this.props.app
        const map = app.state.map

        // if(map){
        //     var geojsonFeatures = data;
        //     console.log(geojsonFeatures)

        //     map.on('load', function(){
        //         geojsonFeatures.features.forEach(function (marker){
        //             var el = document.createElement('div');
        //             el.id = 'marker';

        //             var images = marker.properties.images
        //             var slideshowContent = ""

        //             for (var i = 0; i < images.length; i++) {
        //                 var img = images[i];

        //                 slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
        //                 `<img src="${marker.properties.images}" />` + '</div>';
        //             }
        //             var popupContent = '<div id="' + marker.properties.id + '" class="popup">' + '<h3>' + marker.properties.title + '</h3>' + '<div class="slideshow">' + slideshowContent + '</div>' +
        //             '<div class="cycle">' +
        //             '<a href="#" class="prev">&laquo; Previous</a>' +
        //             '<a href="#" class="next">Next &raquo;</a>' +
        //             '</div></div>';

        //             var popup = new mapbox.Popup().setHTML(popupContent)

        //             popup.on('open', function(){
        //                             map.flyTo({
        //                                 center: [marker.geometry.coordinates[0], (marker.geometry.coordinates[1] + 0.040)],
        //                                 zoom: 12,
        //                             })
        //                         });

        //             new mapbox.Marker(el)
        //                 .setLngLat(marker.geometry.coordinates)
        //                 .setPopup(popup)
        //                 .addTo(map);
        //         })
        //     })

        //     $('#map').on('click', '.popup .cycle a', function () {
        //         var $slideshow = $('.slideshow'),
        //           $newSlide;
          
        //         if ($(this).hasClass('prev')) {
        //           $newSlide = $slideshow.find('.active').prev();
        //           if ($newSlide.index() < 0) {
        //             $newSlide = $('.image').last();
        //           }
        //         } else {
        //           $newSlide = $slideshow.find('.active').next();
        //           if ($newSlide.index() < 0) {
        //             $newSlide = $('.image').first();
        //           }
        //         }
          
        //         $slideshow.find('.active').removeClass('active').hide();
        //         $newSlide.addClass('active').show();
        //         return false;
        //       });

        // }

        
        if(map){
            data.features.forEach(project => {    
    
                const coord = project.geometry.coordinates
                const popup = new mapbox.Popup()
                .setMaxWidth("450px")
                popup.setHTML(
                   ` 
                <div class="mapboxgl-popup-content-marker">
                    <img src="http://richardsaxton.org/websites/m12_landlines/${project.properties.images}">

                    <div class="content">
                        <div class="title">
                            <h3>${project.properties.title}</h3>
                            <h4>${project.properties.artist}</h4>
                        </div>
                        <p>${project.properties.description}</p>
                    </div>
                </div>

                    `
                )

                popup.on('open', function(){
                    map.flyTo({
                        center: [project.geometry.coordinates[0], (project.geometry.coordinates[1] + 0.050)],
                        zoom: 12,
                    })
                });

                // const closePopup = document.querySelector('button.mapboxgl-popup-close-button')

                // closePopup.onclick( function(){
                //     map.flyTo({
                //         center: [app.state.longitude, app.state.latitude],
                //         zoom: 8.5,
                //     })
                // });

                var el = document.createElement('div');
                el.id = 'marker';
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


export default Marker



