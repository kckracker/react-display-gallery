// Imports for App dependencies
import React, {Component} from 'react';
import apiKey from './config';
import {
    Switch,
    Route
    } from 'react-router-dom';
import axios  from 'axios';

// Imports components
import Home from './components/Home';
import Search from './components/Search';
import SearchBar from './components/SearchBar';
import NavTerms from './components/NavTerms';
import NotFound from './components/NotFound';





class App extends Component {
    /* The state of the application is all stored within the App class component.
        - results is used to determine if photos were returned from the get request
        - searchText is used to store the current value searched by a user
        - photos is used to store the photo data gathered from Flickr in response to a search
        - homePhotos is used to store the initial photos gathered for use on the home page to make ease of navigation and reduce get requests to the Flickr API

        Functions setSearchText and performSearch are bound to this application to enable use with the 'this' keyword.
    */
    constructor(props){
        super(props);
        this.state = {
            results: false,
            loading: false,
            searchText: "",
            photos: [],
            homePhotos: []
        }
        this.setSearchText = this.setSearchText.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    
    // Calling performSearch upon mount to ensure defaul photos load
    componentDidMount(){
        this.performSearch();
        this.setState({
            homePhotos: this.props.photos
        })
    }

     /** Function to set state searchText from SearchBar or NavTerm components 
     * {text} - accepts string of text from navigation or user input
     * */ 
    setSearchText = (text) => {
        if(!text){
            alert("Please enter a value for your search!")
        } else {
            this.setState({
                searchText: text
            })
        }
    }

    /** Function to generate photos from search or navigation from Flickr API 
     * {number} - accepts number to request limit of photos
     * {text} - accepts string from state searchText
     * 
     * The {number} and {text} supplied to the function is inserted in url to fetch photo data from the Flickr API. 
     * 
     * If the number supplied is 3, indicating the home page has been requested, the photos are stored in state under the homePhotos array. 
     * 
     * Else, the photos are stored in state under the photos array. In both instances the results state is set to true.
     * */ 
    performSearch = (number = 3, text = "fjord%2C+sunset%2C+skyline" ) => {
        this.setState({
            results: false,
            loading: true
        })
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${text}&safe_search=1&content_type=1&per_page=${number}&format=json&nojsoncallback=1`)
        .then(data => {
            if(data.data.photos.photo.length === 0){
                this.setState({
                    loading: false
                })
                return
            }
            else if(number === 3){
                this.setState({
                    homePhotos: data.data.photos.photo,
                    results: true,
                    loading: false
                })
            } else {
                this.setState({
                    photos: data.data.photos.photo,
                    results: true,
                    loading: false 
                })
            }
        })
    }

    // Calling render method and returning the JSX tags for the app feeding dependency state data to the components via props. SearchBar and NavTerms components will remain constant no matter the route so I have placed them outside the Switch.
    render(){

        return(
                <div className="container">
                <SearchBar 
                    search={this.performSearch } 
                    term={this.setSearchText}
                    text={this.state.searchText}
                    />
                <NavTerms 
                    search={this.performSearch} 
                    term={this.setSearchText}
                    text={this.state.searchText} 
                    />
                <Switch> 
                    <Route path={`/search/:term`} >
                        <Search 
                                word={this.setSearchText}
                                text={this.state.searchText} 
                                results={this.state.results}
                                data={this.state.photos} 
                                search={this.performSearch}
                                load={this.state.loading}
                        /> 
                    </Route>
                    <Route exact path="/" >
                        <Home 
                            results={this.state.results}
                            data={this.state.homePhotos}
                            title="React Display Gallery"
                        />
                    </Route>                    
                    <Route>
                        <NotFound />
                    </Route>
                 </Switch>
                </div>
        )
    }


}

export default App;

