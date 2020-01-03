import React from 'react';
import axios from 'axios';
import './movieSection.scss'

class MovieSection extends React.Component {
    state = {
        movieTitle: [],
        movieDescription: [],
        photo: []
    };

  

    setMovieInState(data) {
        let randomNumber = Math.floor(Math.random() * (19 - 0)) + 0;
            this.setState({
                movieTitle: data.results[randomNumber].title,
                movieDescription: data.results[randomNumber].overview,
                photo: "https://image.tmdb.org/t/p/w1280" + data.results[randomNumber].backdrop_path
            });
        }     
    

    getMovie() {
        axios.get(this.props.link)
            .then(res => {
                let data = res.data;
                this.setMovieInState(data);
            })
            .catch((error)=>{
                console.log(error);
            });      
        }

    componentDidMount() {
        this.getMovie();
    }

    render() {
        return (
            <div>
                <h1 id="category">{this.props.category}</h1>
                <div id="movieSet_wrapper">
                    <div id="card" style={{backgroundImage: `url(${this.state.photo})`}}>
                        <div id="text_wrapper">
                            <p id="title_card">{this.state.movieTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieSection