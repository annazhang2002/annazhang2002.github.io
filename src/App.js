import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import Homepage from './screens/Homepage';

const App = () => (
	<div className="center-text">
		<Route path="/" exact component={Homepage} />
	</div>
);

export default App;
