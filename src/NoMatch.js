import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
	return(
      <div>
		<h1>No match found</h1>
      <ul>
      	<li>
      		<Link to="/">Go to Book shelf</Link>
      	</li>
      	<li>
      		<Link to="/search">Find books</Link>
      	</li>      
      </ul>
      </div>
	);
}

export default NoMatch;