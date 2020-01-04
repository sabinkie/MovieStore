import React from 'react';
import axios from 'axios';

class Movies extends React.Component {
    onClickNav = () => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ad840cde5d9cba2a015a161594f2e2ae&language=en-US`,
            { Authentication: 'api_key=ad840cde5d9cba2a015a161594f2e2ae' })
    }

}

export default Movies;