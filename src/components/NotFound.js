// Imports dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// NotFound containing li .not-found, h3 "No Results Found", p "Your search did not return any results. Please try again."

const NotFound = (props) => {

    return(
        <ul>
            <li className="not-found">
                <h3>Page Not Found</h3>
                <p>Your search did not return any results. Please try again.</p>
            </li>
            <nav className="main-nav">
                <Link exact to='/' onClick={() => props.home(3)} >Go Home</Link>
            </nav>
        </ul>
        
    )
}

export default NotFound;