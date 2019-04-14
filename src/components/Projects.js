import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}

	toggleCategories() {
	  if(this.state.activeTab === 0){
		return(
		  <div className="projects-grid">
			{/* React Web Profile Project  */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >Personal Portfolio Website</CardTitle>
			  <CardText>
			  	This is my first attempt at a React Website. I decided to make something that I have always wanted to have and soemthing functional... A personal portfolio site.
			  </CardText>
			  <CardActions border>
			  	<a href="https://github.com/Jonathan-Cochran/RoosterRanch" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
			  	<a href="http://www.roosterran.ch" rel="noopener noreferrer" target="_blank"><Button colored>LiveDemo</Button></a>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			    <IconButton name="share" />
			  </CardMenu>
			</Card>

			{/* React Web Profile Project  */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >Google Maps App</CardTitle>
			  <CardText>
			  	A react app integrated with Google Maps.
			  </CardText>
			  <CardActions border>
			  	<Button colored>GitHub</Button>
			  	<Button colored>CodePen</Button>
			  	<Link to="/GMap"><Button colored>LiveDemo</Button></Link>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			    <IconButton name="share" />
			  </CardMenu>
			</Card>

		  </div>
	  	)
	  } else if(this.state.activeTab === 1) {
	  	return(
		  <div className="projects-grid">
			{/* WordPress Project */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.buckeyesforacure.com/wp-content/gallery/misc/step1.jpg) center / cover'}} >Buckeyes For A Cure</CardTitle>
			  <CardText>
			  	This wordpress webiste was created to support the Buckeyes For A Cure non profit that I helped co-found. It allows users to purchase a buckeye to be part of the worlds largest buckeye necklace. Proceeds benefit the Stefanie Spielman fund for breast cancer research.
			  </CardText>
			  <CardActions border>
			  	<Button colored>GitHub</Button>
			  	<a href="http://www.buckeyesforacure.com" rel="noopener noreferrer" target="_blank"><Button colored>LiveDemo</Button></a>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			    <IconButton name="share" />
			  </CardMenu>
			</Card>

			{/* WordPress Project */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://asmblymanagement.files.wordpress.com/2015/02/rental-istockphoto.jpg) center / cover'}} >Hayden Homes LLC</CardTitle>
			  <CardText>
			  	I created this wordpress website to help prmote the rentals that I have. I have also used it to experement with PHP and MySQL.
			  </CardText>
			  <CardActions border>
			  	<Button colored>GitHub</Button>
			  	<a href="http://www.haydencanhelp.com" rel="noopener noreferrer" target="_blank"><Button colored>LiveDemo</Button></a>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			    <IconButton name="share" />
			  </CardMenu>
			</Card>
	  		</div>
	  	)
	  } else if(this.state.activeTab === 2) {
	  	return(
	  		<div><h1>This is MongoDB</h1></div>
	  	)	  	
	  } else if(this.state.activeTab === 3) {
	  	return(
	  		<div><h1>This is Angular</h1></div>
	  	)	  	
	  }
	}

	render() {
		return(
			<div className="catagory-tabs">
			  <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
				<Tab>React</Tab>
				<Tab>WordPress</Tab>
				<Tab>MongoDB</Tab>
				<Tab>Angular</Tab>
			  </Tabs>

			  	<Grid>
			  	  <Cell col={12}>
			  	    <div className="content">{this.toggleCategories()}</div>
			  	  </Cell>
			  	</Grid>
			</div>
		)
	}
}

export default Project;