import React, { Component } from 'react';
import MapContainer from "./Map";
import { Grid, Cell } from 'react-mdl';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const data = [
  {
    name : "Root",
    lat : 39.958065,
    lng : -82.997717,
    addr : "80 E Rich St Suite 500, Columbus, OH 43215",
    id: 1
  },
  {
    name : "Condado",
    lat : 39.959421,
    lng : -82.999859,
    addr : "132 S High St, Columbus, OH 43215",
    id: 1
  },
  {
    name : "Winans",
    lat : 39.957719,
    lng : -82.999499,
    addr : "216 S High St, Columbus, OH 43215",
    id: 2
  }
];

const LocationList = props => {
  return (
    <div>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id} onClick={e => props.onClick(e, item)}>
              {item.name} - {item.addr}
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
      <div className="google-map-div">
        <Grid>
          <Cell col={10}>
          <LocationList items={data} onClick={this.showInfo.bind(this)} />
          <MapContainer
            center={{ lat: 39.958065, lng: -82.997717 }}
            zoom={16}
            style={mapStyles}
            data={data}
            selectedItem={this.state.selectedItem}
          />
          </Cell>
          <Cell col={2}>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default gMap;