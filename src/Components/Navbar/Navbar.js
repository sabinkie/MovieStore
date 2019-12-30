import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Navbar extends React.Component {

    onClickNav = () => {
        console.log('Works');
        const movie_id = 5;
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=ad840cde5d9cba2a015a161594f2e2ae&language=en-US`,
            { Authentication: 'api_key=ad840cde5d9cba2a015a161594f2e2ae' },
            { Parameters: `movie_id=${movie_id}` })
    }

    render() {
        return (
            <nav id='navbar'>
                <img className='image' src={require('./icon.png')} />
                <ul>
                    <li className='navItem'><a href='index.html'>Home</a></li>
                    <li className='navItem'><a href='#'>What's new</a></li>
                    <li className='navItem'><a onClick={this.onClickNav} href='#'>Movies</a></li>
                    <li className='navItem'><a onClick={this.onClickNav} href='#'>TV Series</a></li>
                    <li className='navItem'><a href='#'>About</a></li>

                </ul>
            </nav>
        )
    }
}


export default Navbar; 