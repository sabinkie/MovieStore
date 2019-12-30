import React from 'react';
import axios from 'axios';
import './header.scss'

class Header extends React.Component {
    state = {
        movieTitle: [],
        movieDescription: [],
        photo: []
    };

  

    setRandomMovieInState(data) {
        let randomNumber = Math.floor(Math.random() * (19 - 0)) + 0;
            this.setState({
                movieTitle: data.results[randomNumber].title,
                movieDescription: data.results[randomNumber].overview,
                photo: "https://image.tmdb.org/t/p/w1280" + data.results[randomNumber].backdrop_path
            });
        }     
    

    getRandomMovie() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=68d7264858afc32ecd7aaaf941bb14b7&language=en-US')
            .then(res => {
                let data = res.data;
                this.setRandomMovieInState(data);
            })
            .catch((error)=>{
                console.log(error);
            });      
        }

    componentDidMount() {
        this.getRandomMovie();
    }

    render() {
        return (
            <div id="header_wrapper" style={{backgroundImage: `url(${this.state.photo})`}}>
                <div id="text_wrapper">
                    <p id="title">{this.state.movieTitle}</p>
                    <p id="description">{this.state.movieDescription}</p>
                </div>
            </div>
        )
    }
}

export default Header