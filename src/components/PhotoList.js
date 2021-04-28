// Imports dependencies
import React from 'react';
import Photo from './Photo';



const PhotoList = props => {
    // Storing reference to prop for photo data for ease of reference in component
    const data = props.data;
    
    // Declaring empty variable to push updated array of Photo tags for reference in return statement
    let photoArray;

    // If data is supplied, photoArray variable is set to a new array mapped from the photo data supplied via props. For each item in the props data, a Photo tag is generated with a url pulling the server, id, and secret info supplied by props. The alt tag is set to the title info and a key is assigned from the id property listed in the props data.
    if(data){
        photoArray = data.map( photo =>
                <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} alt={photo.title} key={photo.id} />
        );   
    }

    // Returns h2 Title supplied from props and inserts the array of Photo JSX tags inside a ul tag.
    return(
        <div className="photo-container">
            <h2>{props.title}</h2>
            <ul>
                {photoArray}
            </ul>
        </div>
    )       
  
}

export default PhotoList;