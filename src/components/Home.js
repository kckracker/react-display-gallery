import React from 'react';
import PhotoList from './PhotoList';

const Home = (props) => {
    
    // If prop results returns true, PhotoList component is returned with the homePhotos and title data passed over from App; else, an h3 Loading tag is displayed to away results.
    if(props.results){
        return( 
                <PhotoList data={props.data} title={props.title} />
        )
    } else {
        return(
            <h3>Loading...</h3>
        )
    }
    

}

export default Home;