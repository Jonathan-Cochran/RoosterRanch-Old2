import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const google = window.google;
    const data = this.props.data;
    const center = this.props.center;

    return (
      <div className="map-container">
        <Map
          google={google}
          className={"map"}
          style={this.props.style}
          zoom={this.props.zoom}
          initialCenter={center}
        >
          {data.map(item => (
            <Marker
              key={item.id}
              title={item.name}
              name={item.name}
              position={{ lat: item.lat, lng: item.lng }}
            />
          ))}

          <InfoWindow
            visible={true}
            position={{
              lat: this.props.selectedItem.lat,
              lng: this.props.selectedItem.lng
            }}
          >
            <div className="map-info-window">
              {this.props.selectedItem.name}
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_KEY}`
})(MapContainer);
