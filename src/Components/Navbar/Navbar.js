import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Navbar extends React.Component {
    state = { term: '' }

    onInputChange = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ad840cde5d9cba2a015a161594f2e2ae&query=${this.state.term}`,
            { Authentication: 'api_key=ad840cde5d9cba2a015a161594f2e2ae' })
    }

    // onClickNav = () => {
    //     axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ad840cde5d9cba2a015a161594f2e2ae&language=en-US`,
    //         { Authentication: 'api_key=ad840cde5d9cba2a015a161594f2e2ae' })
    // }


    render() {
        return (
            <nav id='navbar'>
                <img className='image' src={require('./icon.png')} />
                <ul>
                    <li className='navItem'><a href='index.html'>Home</a></li>
                    <li className='navItem'><a href='#'>What's new</a></li>
                    <li className='navItem'><a onClick={this.onClickNav} href='#'>Movies</a></li>
                    <li className='navItem'><a onClick={this.onClickNav} href='#'>TV Series</a></li>
                    <li className='navItem'><a onClick={this.onInputChange} href='#'>Search by title: </a>
                        <input type='text' value={this.state.term} onChange={(e) => {
                            this.setState({ term: e.target.value })
                        }}>
                        </input>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Navbar; 