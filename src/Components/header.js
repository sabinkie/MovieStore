import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

class Header extends React.Component {
    state = {
        data : []
    }

componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=68d7264858afc32ecd7aaaf941bb14b7&language=en-US')
        .then(res => {
        let number =   Math.floor(Math.random() * (19 - 0)) + 0; 
        const data = res.data;
        this.setState({name: data.results[number].title,
            text: data.results[number].overview,
            photo: "https://image.tmdb.org/t/p/w1280" + data.results[number].backdrop_path
            });
        })
    }

render() {
    return (
        <div id="header_wrapper" style={{backgroundImage: `url(${this.state.photo})`}}>
            <div id="text_wrapper">
                <p id="title">{this.state.name}</p>
                <p id="description">{this.state.text}</p>
            </div>
        </div>
        )
    }
}

export default Header