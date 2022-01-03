import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class QRCode extends Component {
	constructor(props){
		super(props)
		this.state = {
			result: 'Hold QR Code Steady and Clear to Scan',
		}
		this.handleScan = this.handleScan.bind(this)
	}

	handleScan = data => {
	  if (data) {
	    this.setState({
	      result: data
	    })
	  }
	}

	handleError = err => {
	  console.error(err)
	}

  	render() {
  		const previewStyle = {
  			height: 400,
  			width: 400,
  			display: 'flex',
  			"justify-content": "center"
  		}

  		const camStyle = {
  			display: 'flex',
  			justifyContent: "center",
  			marginTop: '-50px'
  		}

  		const textStyle = {
  			fontSize: '20px',
  			"text-align": 'center',
  			marginTop: '-50px'
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
	      </React.Fragment>
		)
	}
}

export default QRCode;