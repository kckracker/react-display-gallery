import React from 'react';
import PhotoList from './PhotoList';

const Home = (props) => {
    

    if(props.data){
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