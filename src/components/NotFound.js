// Imports dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// NotFound containing li .not-found, h3 "No Results Found", p "Your search did not return any results. Please try again."

const NotFound = (props) => {

    // Returns a simple message stating the page was not found and a link to return to the home page.
    return(
        <ul>
            <li className="not-found">
                <h3>Page Not Found</h3>
                <p>The page you are looking for is on the run. Please try again.</p>
            </li>
            <nav className="main-nav">
                <Link exact to='/'>Go Home</Link>
            </nav>
        </ul>
        
    )
}

export default NotFound;