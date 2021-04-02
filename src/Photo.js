// Imports dependencies
import React from 'react';


const Photo = (props) => {
    return(
        <ul>
            <li><img src={props.url} alt=""/></li>
        </ul>
    )
}

export default Photo;