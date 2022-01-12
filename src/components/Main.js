import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landingpage from './Landingpage';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import GMap from './GMap';
import TestAndLearn from './TestAndLearn';
import QRCode from './QRCode';


const Main = () => (
	<Switch>
		<Route exact path="/" component={Landingpage} />
		<Route path="/aboutme" component={Aboutme} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
{/*		<Route path="/resume" component={Resume} /> */}
		<Route path="/GMap" component={GMap} />
		<Route path="/TestAndLearn" component={TestAndLearn} />
		<Route path="/QRCode" component={QRCode} />
	</Switch>
)

export default Main;