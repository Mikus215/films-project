import React from 'react';
import PopularMoviesHome from './pages/PopularMoviesHome';
import PopularFilms from './pages/PopularFilms';
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Switch, Route  } from 'react-router-dom';

function App() {

    return (
      <>    
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <PopularMoviesHome/>
        </Route>
        <Route path="/popularfilms" >
          <PopularFilms path="/" exact />
        </Route>
      </Switch>
      <Footer />
      </>
  );
}


export default App;
