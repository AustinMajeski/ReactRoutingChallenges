import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"


import About from "./pages/About"


import Movie from "./pages/Movie"
import movieData from "./store/movies"


class App extends Component {

    constructor(){
        super()
        // Setting the mock data in state
        this.state = {
            allMovies: movieData
        }
    }


    render(){
        return(
          <React.Fragment>
              pee
        { movieData.map( v=> <div>{` Id: ${v.id} - Name: ${v.name} - Ingredients: ${v.ingredients}`}</div>) }
            <Router>
                <Route path="/about/" render={()=><About find={"that movie"}/>}/>

                {/*============================================================*/}

                <ul>
                { this.state.allMovies.map((movie, index) =>
                <li key={ index }>
                  <Link to={ `/movies/${movie.id}` }>
                    { movie.name }
                  </Link>
                </li>
                )}
              </ul>

              <Switch>
                <Route
                  path="/movies/:id"
                  render={ (props) => <Movie {...props} movies={ this.state.allMovies } /> }
                />
              </Switch>
    
                {/*============================================================*/}




        {/*
                <Route path="/movies/:id" component={ Movies }/>
                <Route path="/movies/" component={ Movies }/>
    */}
            </Router>
        </React.Fragment>
          )
        }
        }

export default App;
