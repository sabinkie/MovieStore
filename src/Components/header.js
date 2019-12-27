import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

class Header extends React.Component {
    state = {
        test : []
    }

componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=68d7264858afc32ecd7aaaf941bb14b7&language=en-US')
        .then(res => {
        //random number from 0 to 19 

        let number =   Math.floor(Math.random() * (19 - 0)) + 0; 

        const test = res.data;
        this.setState({name: test.results[number].title,
            text: test.results[number].overview,
            photo: "https://image.tmdb.org/t/p/w1280" + test.results[number].backdrop_path
            });
        console.log(test);
        //console.log(this.state.test.results[0].title);
        console.log(this.state.photo)


    })
}

render() {
    return (
        <div id="header_wrapper" style={{backgroundImage: `url(${this.state.photo})`, width: "100vw", height: "100vh"}}>
            {/*<img src={this.state.photo} alt="image"/>*/}
            <p id="title">{this.state.name}</p>
            <p id="description">{this.state.text}</p>
        </div>
        )
    }
    
}


export default Header
