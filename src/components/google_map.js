import React, { Component } from 'react';

class GoogleMap extends Component {

    //lifecylce method that runs auto after the component has been rendered to the dom
    
    componentDidMount() {
        //below how we create embedded maps
        //takes reference to html node where we pass this map to
        
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render(){

        return <div ref="map"/>
    }
}


export default GoogleMap;
