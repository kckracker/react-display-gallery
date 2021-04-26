// Imports dependencies
import React from 'react';
import Photo from './Photo';



const PhotoList = props => {
    const data = props.data;
    let photoArray;


    if(data){
        photoArray = data.map( photo =>
                <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} alt={photo.title} key={photo.id} />
        );   
    }

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