// Imports dependencies
import React from 'react';


const Photo = (props) => {
    // Accepts props from the PhotoList component supplying the individual photo url and a key prop to distinguish indivdual items in a list or array.
    return(
        <li><img src={props.url} alt="" key={props.id} /></li>
        
    )
}

export default Photo;