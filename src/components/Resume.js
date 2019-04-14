import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';

class Resume extends Component {
	render() {
		return(
			<div>
			  <Grid>
			    <Cell col={4}>
			      <div style={{textAlign: 'center'}}>
			      	<img
			      		src='JonathanCochran-1200.jpg'
			      		alt='Jonathan Cochran'
			      		style={{height: '200px'}}
			      	/>
			      </div>

			      <h2 style={{paddingTop: '.5em'}}>Jonathan Cochran</h2>
			      <h4 style={{color: 'grey'}}>Technology Leader</h4>
			      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
			      <p>Passionate leader with expertise in executing and leading technology-based, multi-million dollar initiatives. Impressive, fast track management career marked by an ability to develop high-performing teams and achieve business objectives. Valued member of Leadership, Advisory, and Professional teams, contributing a fresh and energetic perspective to the creation and implementation of IT solutions.</p>
			      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
			      <h5>Address</h5>
			      <p>3232 N. CR-605, Sunbury, OH 43074</p>
			      <h5>Phone</h5>
			      <p>614.361.2887</p>
			      <h5>Email</h5>
			      <p>Jonathan.Cochran@gmail.com</p>
			      <h5>Web</h5>
			      <p>www.RoosterRan.ch</p>
			      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
			    </Cell>
			    <Cell className='resume-right-col' col={8}>
			      <h2>Experience</h2>

			      <Experience 
			        startYear='2005'
			        endYear='2006'
			        jobName='Nationwide Insurance'
			        jobTitle='PLS - Sr. Developer'
			        jobDescription='Assumed a leadership role training new employees on the existing code as well as sharing best practices and information pertaining to coding concepts. Was instrumental to the execution of the five phases of Enterprise Solution Delivery of the first successfully implemented multi-organizational projects.'
			      />

			      <Experience 
			        startYear='2002'
			        endYear='2005'
			        jobName='Progressive Medical Inc.'
			        jobTitle='Program Analyst II'
			        jobDescription='Pioneered a secure web site with multiple applications to cater to their customers. This site was the primary place the company was pushing all new business and customers.'
			      />

			      <Experience 
			        startYear='2000'
			        endYear='2002'
			        jobName='Speedway SuperAmerica LLC'
			        jobTitle='Advanced Program Analyst'
			        jobDescription='Became the IT point person for projects. Encouraged an environment of customer focus and a drive to do whatever was required to get the job done.'
			      />

			      <hr style={{borderTop: '3px solid #e22947'}} />

			      <h2>Skills</h2>

			      <hr style={{borderTop: '3px solid #e22947'}} />
			      <h2>Education & Volunteerism</h2>

			      <Education 
			        startYear='1996'
			        endYear='2000'
			        schoolName='Bowling Green State University'
			        schoolDescription='Bachelor of Science, Computer Science'
			      />

			      <Education 
			        startYear='2016'
			        endYear='2017'
			        schoolName='Nationwide Insurance'
			        schoolDescription='Nationwide - BGSU Campus Squad'
			      />
			      
			      <Education 
			        startYear='2008'
			        endYear='Present'
			        schoolName='Buckeyes For A Cure'
			        schoolDescription='Co-Founder'
			      />

			      <hr style={{borderTop: '3px solid #e22947'}} />

			    </Cell>
			  </Grid>
			</div>
		)
	}
}

export default Resume;