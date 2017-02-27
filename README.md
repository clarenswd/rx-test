#For the person reviewing the app
- I used React as a library and React-Router for navigation|history features. 
- There is a small express server handling authentication, since initially I had some issues adding my referrer url, still I can't do it.
- I used react-scripts for rapid prototyping. I could have used webpack.
- I did not use any flux, neither redux architecture. At the very end I wished I had.  
- I used SCSS for the styling, I didn't modularized any files. I tried to use some mixins and features of the SASS file but my main focus was on rendering data from the API.
- I only pulled data from comics and characters. The best example showing linking of data is the comic called "Secret Empire (2017)". Events and series would have followed the same pattern, just parsing results array, I found it a repetitive task to do them. It would happen the same as the characters page, call a url, get the results array and parse it, change some names and that's it. Not a excuse, I acknowledge I might loose points on that one. 
- Search is not allowed, I was hoping to pull an static file of titles and use maybe regex to do a local search, but didn't happen. I put a simple filtering, nothing fancy at all. 




If you would like to run the app on your local machine:
- clone repo, 
- install packages
- `npm run build` to build the front end. 
- node server.js 
- `http://localhost:5000/` should take you to the index page.




#Live URL 
- https://damp-caverns-28287.herokuapp.com/

