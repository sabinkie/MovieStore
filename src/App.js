import React from 'react';
import './App.css';
import './Components/Navbar/navbar.scss';
import axios from 'axios';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import TVseries from './Components/TVseries/TVseries';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  state = {
    term: '',
    movies: []
  }

  onInputChange = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ad840cde5d9cba2a015a161594f2e2ae&query=${this.state.term}`,
      { Authentication: 'api_key=ad840cde5d9cba2a015a161594f2e2ae' })
    console.log(res.data.results.original_title);

    this.setState({ movies: res.data.results })
  }
  // onClickNav = () => {
  //     axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ad840cde5d9cba2a015a161594f2e2ae&language=en-US`,
  //         { Authentication: 'api_key=ad840cde5d9cba2a015a161594f2e2ae' })
  // }
  render() {
    return (
      <Router>
        <nav id='navbar'>
          <img className='image' src={require('./icon.png')} />
          <ul>
            <li className='navItem'>
              <Link to='/'>Home</Link>
            </li>
            <li className='navItem'>
              <Link to='/movies'>Movies</Link>
            </li>
            <li className='navItem'>
              <Link to='/tvseries'>TV Series</Link>
            </li>
            <li className='navItem'><a onClick={this.onInputChange} href='#'>Search by title: </a>
              <input type='text' value={this.state.term} onChange={(e) => {
                this.setState({ term: e.target.value })
              }}>
              </input>
            </li>
          </ul>

          <Route exact path='/' component={Home} />;
          <Route path='/movies' component={Movies} />;
          <Route path='/tvseries' component={TVseries} />;

        </nav>
      </Router>
    )
  }
}

export default App;

