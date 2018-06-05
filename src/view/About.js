import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default class About extends React.Component{
    constructor(){
        super();
        this.state = {
            marker_lat: 40.189312699999995,
            marker_long: 44.5118909,
            center_lat: 40.189312699999995,
            center_long: 44.5118909
        }
    }

    getLocation() {
        const dom = document.getElementsByClassName('parent-content');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                dom[0].innerHTML = "<h2>Here are your location coordinates:</h2>"
                + "<p>Latitude: " + position.coords.latitude + "</p>"
                + "<p>Longitude: " + position.coords.longitude + "</p>"; 
                
            });
        } else {
            dom.innerHTML = "Geolocation is not supported by this browser.";
        };
    }

    userLocation(){
        this.setState({
            center_lat: this.state.center_lat + 1,
            center_long: this.state.center_long + 1,
            marker_lat: this.state.marker_lat + 1,
            marker_long: this.state.marker_long + 1
        })
    }
    
    render(){
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: this.state.marker_lat, lng: this.state.marker_long }}>
                {props.isMarkerShown && 
                <Marker position={{ lat: this.state.center_lat, lng: this.state.center_long }} />}
            </GoogleMap>
        ));

        return(
            <div className="container-fluid">
                <div className="about parent-content">
                    {this.getLocation()}
                </div>
                <button className="btn btn-success" onClick={this.userLocation.bind(this)}>Get your location.</button>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}