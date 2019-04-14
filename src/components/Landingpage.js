import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
						  src="JonathanCochran-1200.jpg"
						  alt="avatar"
						  className="avatar-img"
						/>

						<div className="banner-text">
							<h1>I LOVE BUILDING</h1>
							<hr/>
							<p>
								Technology | Teams | Ideas | Passion | 3d Prints
							</p>
							<div className="social-links">

								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/jonathancochran77/" rel="noopener noreferrer" target="_blank">
								  <i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://github.com/Jonathan-Cochran" rel="noopener noreferrer" target="_blank">
								  <i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* Twitter */}
								<a href="https://twitter.com/JonathanCochran" rel="noopener noreferrer" target="_blank">
								  <i className="fa fa-twitter-square" aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;