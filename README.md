# React Display Gallery
___
### Before we begin...[^1]
___
## Overview
___

Welcome to my React enabled photo gallery! The project makes use of the React library as a single page application pulling photo information from the Flickr API. The application can be best summarized by a brief description of the App component and how it interacts with its children components.
___
###     App
___

The App component is a class based component storing the state for all other components. The App component stores the functions for establishing the search term state and placing a get request to the Flickr API for photos based on the search term supplied. 

Inside the return statement, App returns all the JSX tags composing the program. The SearchBar and NavTerm components are returned at top level and a Switch is nested beneath to route content based on the url supplied.

The home Route points to the Home component which nests an h2 React Display Gallery title and the PhotoList component, returning a total of 3 Photo components.

The search Route points to the Search component which nests a dynamic search title, the PhotoList component returning 24 Photo components, and a Link to the home route.
___
## CSS Changes
___
- Color scheme for the application was updated to incorporate new background color, link colors, and hover colors
- Rounded border edges on input field and navigation links for a more modern feel
- Updated hover animation on photos to display a slight reduction in photo scale upon hover
- Updated font selection in application to Raleway and updated font colors to better complement application color scheme
	
[^1]: This application requires you to run the command "npm start" in your console at the project's folder location then point your browser to "localhost:3000" to view.
