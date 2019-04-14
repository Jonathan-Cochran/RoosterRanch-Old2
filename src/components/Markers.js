import React, { Component } from 'react';
import { Marker } from 'google-maps-react';


const Markers = props => (
  myMarkers.map(marker =>
    <Marker  
      {...props} 
      key={marker.id} 
      title={marker.name}
	  onClick={this.onMarkerClick}
      name={'SS1'}
      position={{lat: 39.95, lng: -82.99}}
     />
  )
);


class Resume extends Component {
	render() {
		return(

		)
	}
}

export default Markers;