import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return(
			<div className='contact-body'>
			  <Grid className='contact-grid'>
			  	<Cell col={6}>
			  	  <h2>Jonathan Cochran</h2>
			  	  <img
			  	  	src="https://avatars3.githubusercontent.com/u/8834506?s=460&v=4"
			  	  	alt="avatar"
			  	  	style={{height: '150px'}}
			  	   />
			  	  <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am most passionate about innovative people, products, and technology that are capable of disrupting industries. I love entrepreneurship, technology, and working with teams to create products that add value for their users. I also have a passion for DevOps, lean, agile and real estate investing (I know that last one kind of sticks out..:). Finally, I like to run, but I often have to remind myself of this.</p>
			  	</Cell>
			  	<Cell col={6}>
			  	  <h2> Contact Me</h2>
			  	  <hr/>

			  	  <div className="contact-list">
					  <List>
					    <ListItem>
					      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
					        <i className="fa fa-phone-square" aria-hidden="true"/>
					        614.361.2887
					      </ListItemContent>
					    </ListItem>

					    <ListItem>
					      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
					        <i className="fa fa-envelope" aria-hidden="true"/>
					        Jonathan.Cochran@gmail.com
					      </ListItemContent>
					    </ListItem>

					    <ListItem>
					      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
					        <i className="fa fa-twitter" aria-hidden="true"/>
					        @JonathanCochran
					      </ListItemContent>
					    </ListItem>

					  </List>
				  </div>
			  	</Cell>
			  </Grid>
			</div>
		)
	}
}

export default Contact;