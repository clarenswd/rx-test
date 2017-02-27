// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ComicPage from './components/ComicPage';
import CharactersPage from './components/CharactersPage';
//Single View
import SingleCharacterPage from './components/SingleCharacterPage';
 
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="characters" component={CharactersPage}/>
    
    <Route path="comic/:id" component={ComicPage}/>
    <Route path="characters/:id" component={SingleCharacterPage}/>

  </Route>
);

export default routes;