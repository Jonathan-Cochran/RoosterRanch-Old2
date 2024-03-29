import React, { Component } from 'react';
import MapContainer from "./Map";
import { Grid, Cell } from 'react-mdl';
//import Scrape from './Scrape';


//var url = 'https://sheriff.co.delaware.oh.us/sheriff-sales/';
//var request = require('request');
//var cheerio = require('cheerio');



const mapStyles = {
  width: '100%',
  height: '100%'
};

const data = [
  {
    name : "Cardinal Health Fuse",
    lat : 40.09889382795459,
    lng : -83.10525710729188,
    addr : "4305 W Dublin Granville Rd, Dublin, OH 43017 ",
    id: 1
  },
  {
    name : "Condado",
    lat : 39.959421,
    lng : -82.999859,
    addr : "132 S High St, Columbus, OH 43215",
    id: 2
  },
  {
    name : "Winans",
    lat : 39.957719,
    lng : -82.999499,
    addr : "216 S High St, Columbus, OH 43215",
    id: 3
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
            center={{ lat: 40.09889382795459, lng: -83.10525710729188 }}
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