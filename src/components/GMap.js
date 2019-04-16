import React, { Component } from 'react';
import MapContainer from "./Map";
import { Grid, Cell } from 'react-mdl';

const mapStyles = {
  width: '80%',
  height: '100%'
};

const data = [
  {
    id: 1,
    name : "Root",
    lat : 39.958065,
    lng : -82.997717,
    addr : "123 Main St." 
  },
  {
    id: 2,
    name : "Test",
    lat : 39.95,
    lng : -82.99,
    addr : "456 Main St." 
  }
];

const LocationList = props => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index} onClick={e => props.onClick(e, item)}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export class gMap extends Component {
  state = {
    selectedItem: { lat: 0, lng: 0 }
  };

  showInfo(e, selectedItem) {
    this.setState({ selectedItem: selectedItem });
    console.log(selectedItem);
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell col={10}>
          <MapContainer
            center={{ lat: 39.958065, lng: -82.997717 }}
            zoom={14}
            style={mapStyles}
            data={data}
            selectedItem={this.state.selectedItem}
          />
          </Cell>
          <Cell col={2}>
            <LocationList items={data} onClick={this.showInfo.bind(this)} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default gMap;