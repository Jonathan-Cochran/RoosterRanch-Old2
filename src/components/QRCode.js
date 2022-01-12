import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { fetchData, putData } from './AwsFunctions';


let LabelID = '';
let params = '';
let queryData = '';

const fetchDataFromDynamoDb = () => {
  queryData = fetchData('QR-Label-Data-Dev', LabelID)
console.log("infetch")
console.log(queryData)
}


class QRCode extends Component {
	constructor(props){
		super(props)
		this.state = {
			result: 'Hold QR Code Steady and Clear to Scan',
		}
		this.handleScan = this.handleScan.bind(this)
//console.log(this.props);

params = new URLSearchParams(this.props.location.search);
//console.log('constructor: ' + params)
LabelID = params.get('LabelID');

		this.onChangeGeoLoc = this.onChangeGeoLoc.bind(this);
        this.onChangeUtilType = this.onChangeUtilType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            geoloc: '',
            utiltype: ''
        }


	}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Form Events
    onChangeGeoLoc(e) {
        this.setState({ geoloc: e.target.value })
    }

    onChangeUtilType(e) {
        this.setState({ utiltype: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            savedstate: 'True'
        })
    }

	// React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem(LabelID));
        if (localStorage.getItem(LabelID)) {
            this.setState({
                geoloc: this.userData.geoloc,
                utiltype: this.userData.utiltype
            })
//console.log('InMount ' + this.userData)
        } else {
            this.setState({
                geoloc: '',
                utiltype: ''
            })
        }
    }

    componentDidUpdate(nextProps, nextState) {
        localStorage.setItem(LabelID, JSON.stringify(nextState));
 //       console.log('Local Storage Name: ' + LabelID)
    }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// QR Code Scan Events
	handleScan = data => {
	  if (data) {
	    this.setState({
	      result: data
	    })
params = new URLSearchParams(data);
//console.log(params)
LabelID = params.get('LabelID');
//console.log(LabelID)
fetchDataFromDynamoDb()
console.log("QRCode ")
console.log(queryData)

//this.componentDidMount()
	  }
	}

	handleError = err => {
	  console.error(err)
	}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Render QRCode Page
  	render() {
  
//  fetchDataFromDynamoDb()

  		const previewStyle = {
  			height: 400,
  			width: 400,
  			display: 'flex',
  			justifyContent: 'center'
  		}

  		const camStyle = {
  			display: 'flex',
  			justifyContent: 'center',
  			marginTop: '-50px'
  		}

  		const textStyle = {
  			fontSize: '20px',
  			textAlign: 'center',
  			marginTop: '50px'
  		}

  		const hiddenStyle = {
  			visibility: 'hidden'
  		}

  		const formStyle = {
  			textAlign: 'center'
  		}

		return(
		  <React.Fragment>
	      	<div style = {camStyle}>
	        	<QrReader
		          delay={300}
		          onError={this.handleError}
		          onScan={this.handleScan}
		          style={previewStyle}
		        />
	        </div>
	        <p style = {textStyle}>
	        	{this.state.result}
	        </p>
	        <div style = {formStyle}>
        	<form onSubmit={this.onSubmit}>
	        	Label ID: {LabelID}
	        	<br />Geo Location: <input type='text' value={this.state.geoloc} onChange={this.onChangeGeoLoc}/>
	        	<br />Utility Type: <input type='text' value={this.state.utiltype} onChange={this.onChangeUtilType}/>
	        	<br /><button type="submit">Save</button>
        	</form>
        	</div>
	      </React.Fragment>
		)
	}
}

export default QRCode;