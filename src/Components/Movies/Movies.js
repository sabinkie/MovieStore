import React from 'react';
import axios from 'axios';

class Movies extends React.Component {


    render() {
        return (
            <div>
                <section>
                    <div content="28">Action</div>
                    <div content="12">Adventure</div>
                    <div content="16">Animation</div>
                    <div content="35">Comedy</div>
                    <div content="80">Crime</div>
                    <div content="99">Documentary</div>
                    <div content="18">Drama</div>
                    <div content="10751">Family</div>
                    <div content="14">Fantasy</div>
                </section>
                <section>
                    <div content="36">History</div>
                    <div content="27">Horror</div>
                    <div content="10402">Music</div>
                    <div content="9648">Mystery</div>
                    <div content="10749">Romance</div>
                    <div content="878">Science Fiction</div>
                    <div content="10770">Thriller</div>
                    <div content="10752">War</div>
                    <div content="37">Western</div>
                </section>
            </div>
        )

    }


    // onClickNav = () => {
    //     axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ad840cde5d9cba2a015a161594f2e2ae&language=en-US`,
    //         { Authentication: 'api_key=ad840cde5d9cba2a015a161594f2e2ae' })
    // }

}

export default Movies;