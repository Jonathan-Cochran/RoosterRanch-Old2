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
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.nextafter.com/wp-content/uploads/2015/09/AB-Testing-Guide-for-Nonprofits.jpg) center / cover'}} >Test into sucess</CardTitle>
			  <CardText>
			  	Launched multivariant testing for a digital product to enable data-driven decisions on potential project value. 
			  	Created feature release planning and owned delivery from milestones to the final product. 
			  	Worked collaboratively with the business, IT, UX, and strategy teams. 
			  	Launched multiple tests across the product including simple style / ux changes to more complex multi-product and user interaction tests. 
			  </CardText>
			  <CardActions border>
			  	<Link to="/TestAndLearn"><Button colored>Learn More</Button></Link>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			  </CardMenu>
			</Card>

			{/* React Web Profile Project  */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsO3XAwYuRgJcU0tYoPsibzLpUmVCOPaARBxtXzh75TQoxDy0x0VlYuQM5OIHyaYNO-YCCqUh55ZR1nrhIyE03YKiujceQOg&usqp=CAU&ec=45732301) center / cover'}} >Mobile App Innovation</CardTitle>
			  <CardText>
			  	Performed a product manager role for a mobile application that had not historically had much focus from the business. 
			  	Lead an effort to create a vision for what the app could achive and how it could benefit our customers. 
			  	Developed roadmap and MVP (minimum viable product) steps along with the product team to enable incremental delivery.
			  	Partnered with Executive Leadership, Marketing, UX, and my product team to prioritize and plan the ongoing feature implementations.
			  </CardText>
			  <CardActions border>
			  	<Link to="/MobileInnovation"><Button colored>Learn More</Button></Link>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
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
			  	This wordpress webiste was created to support the Buckeyes For A Cure non profit that I helped co-found. It allows users to purchase a buckeye to be part of the worlds largest buckeye necklace. Proceeds benefit the Stefanie Spielman fund for breast cancer research. This project has ended and the site is no longer maintained.
			  </CardText>
			  <CardActions border>
			  	<a href="http://www.buckeyesforacure.com" rel="noopener noreferrer" target="_blank"><Button colored>LiveDemo</Button></a>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			  </CardMenu>
			</Card>

			{/* WordPress Project */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://asmblymanagement.files.wordpress.com/2015/02/rental-istockphoto.jpg) center / cover'}} >Hayden Homes LLC</CardTitle>
			  <CardText>
			  	I created this wordpress website to help prmote the rentals that I have. I have also used it to experement with PHP and MySQL.
			  </CardText>
			  <CardActions border>
			  	<a href="http://www.haydencanhelp.com" rel="noopener noreferrer" target="_blank"><Button colored>LiveDemo</Button></a>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			  </CardMenu>
			</Card>
	  		</div>
	  	)
	  } else if(this.state.activeTab === 2) {
	  	return(
	  		<div className="projects-grid">			
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
			  </CardMenu>
			</Card>

			{/* React Web Profile Project  */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >Google Maps App</CardTitle>
			  <CardText>
			  	A react app integrated with Google Maps.
			  </CardText>
			  <CardActions border>
			  	<Link to="/GMap"><Button colored>LiveDemo</Button></Link>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			  </CardMenu>
			</Card>
			</div>
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
				<Tab>Product Management</Tab>
				<Tab>WordPress</Tab>
				<Tab>React</Tab>
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