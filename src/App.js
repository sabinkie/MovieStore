import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar/Navbar'
import './Components/Navbar/navbar.scss'
import Header from './Components/Header/Header'
import MovieSection from './Components/MovieSection/MovieSection'




function App() {
  return (
  <div>
    <Navbar />
    <Header />
    <section id="movie_wrapper">
      <MovieSection category="The most popular" link='https://api.themoviedb.org/3/movie/popular?api_key=68d7264858afc32ecd7aaaf941bb14b7&language=en-US'/>
      <MovieSection category="Top rated" link='https://api.themoviedb.org/3/movie/top_rated?api_key=68d7264858afc32ecd7aaaf941bb14b7&language=en-US'/>    
      <MovieSection category="Now playing" link='https://api.themoviedb.org/3/movie/now_playing?api_key=68d7264858afc32ecd7aaaf941bb14b7&language=en-US'/>    
      <MovieSection category="Upcoming" link='https://api.themoviedb.org/3/movie/upcoming?api_key=68d7264858afc32ecd7aaaf941bb14b7&language=en-US'/>    
    </section>
  </div>
  );
}

export default App;
