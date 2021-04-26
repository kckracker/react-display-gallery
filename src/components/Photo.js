// Imports dependencies
import React from 'react';


const Photo = (props) => {
    return(
        <li><img src={props.url} alt="" key={props.id} /></li>
        
    )
}

export default Photo;