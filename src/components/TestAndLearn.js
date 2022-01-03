import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class TestAndLearn extends Component {
	render() {
		return(
			<div>
			  <Grid>
			    <Cell col={4}>
			      <div style={{textAlign: 'center'}}>
			      	<img
			      		src='https://www.nextafter.com/wp-content/uploads/2015/09/AB-Testing-Guide-for-Nonprofits.jpg'
			      		alt='A/B Testing'
			      		style={{height: '200px'}}
			      	/>
			      </div>

			      <h2 style={{paddingTop: '.5em'}}>Test and learn your way to success</h2>
			      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
			    </Cell>
			    <Cell className='' col={8} style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
<b>IT ALL STARTED WHEN…</b>
<br/>
The company had made multiple decisions to proceed with projects that 'felt' like they would create a large return on investment. 
However, after many months of aligning on requirements and developing the features the return was not there. This drove business and IT 
to partner together on a better approach.

<br/>
We created a small team focused on running tests that would allow us to use actual users data to determine the potential value of features
before implementing larger projects. We took an MVP approach with the tests to allow us to move fast and drive towards data driven decisions.

<br/>
 <List>
<b>MY ROLE</b>
    <ListItem>
      <ListItemContent style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
        <i className="" aria-hidden="true"/>
			Worked with Business to define a backlog of initial tests to seed the team. 
	  </ListItemContent>
	</ListItem>
    <ListItem>
      <ListItemContent style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
        <i className="" aria-hidden="true"/>
Defined a process to allow anyone in the company to submit ideas that could be tested with our product. 
	  </ListItemContent>
	</ListItem>
    <ListItem>
      <ListItemContent style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
        <i className="" aria-hidden="true"/>
Actively participated as a member of the Test and Learn leadership group that received new ideas and analyzed them to ensure we could
develop a proper test plan. This included a clear expectation of the user benefit, business benefit, and how we would measure success. 
	  </ListItemContent>
	</ListItem>
    <ListItem>
      <ListItemContent style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
        <i className="" aria-hidden="true"/>
Had daily standup meetings, clarified scope, implemented changes, prioritized deliverables, monitored status for performance and budget. 
	  </ListItemContent>
	</ListItem>
    <ListItem>
      <ListItemContent style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
        <i className="" aria-hidden="true"/>
Created project plans and feature release planning and owned delivery from milestones to the final product. 
	  </ListItemContent>
	</ListItem>
    <ListItem>
      <ListItemContent style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
        <i className="" aria-hidden="true"/>
Worked with other enterprise groups to allow our team to deliver more often than our standard release cycle would normally allow.
	  </ListItemContent>
	</ListItem>
    <ListItem>
      <ListItemContent style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
        <i className="" aria-hidden="true"/>
Partnered with the product team and infrastructure groups to be the first team to leverage 0 down time deployments. This allowed us to 
implement our tests at anytime without an impact to end users.
	  </ListItemContent>
	</ListItem>

</List>
<br/>

<b>RESULTS</b>
<br/>
We were able to deliver many tests for the product. We typically had 3 - 5 tests running in production at any given time. 
Below are just a couple of examples that lead to future project / feature development.
<br/><br/>
Example: Can changing the color significantly impact users choice?
Test: This was a simple test to display the same 'Get a Quote' button with different colors for 50% of the traffic on the landing page 
of the product. The theroy was that a more -
<br/><br/>
Example: multi product purchase with a manual backend

			    </Cell>
			  </Grid>
			</div>
		)
	}
}

export default TestAndLearn;