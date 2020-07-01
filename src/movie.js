import React, { Component } from 'react';
import { Spinner } from 'react-mdl';
import './App.css';


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            imdb: '',
            clicked: false,
            genres: [],
            genre: 'Any'
        };
        this.handleImdb = this.handleImdb.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        this.onGO = this.onGO.bind(this);
    }

    apiUrl = 'https://api.themoviedb.org/3/movie/';
    apiKey = '4b7b3970bdc784da1f0944241ca24bf9';
    imageUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';

    /* Fetches and saves the latest movie´s id */
    getMaxId() {
        fetch(`${this.apiUrl}latest?api_key=${this.apiKey}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    maxId: data.id
                });
            });
    }

    /* Fetches the current genres available */
    getGenres() {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    genres: data.genres.map(genre => genre.name)
                });
            });
    }

    /* Genereates a random number between 1 and the id for the latest movie */
    randomNumber() {
        const min = 1;
        let max = this.state.maxId;
        const rand = min + Math.floor(Math.random() * (max - min));
        /*console.log("RandomId: " + rand);*/
        return rand;
    }

    /* Checks if movie thats found contains the chosen genre */
    validGenre(genres) {
        let list = genres.map(genre => genre.name);
        return list.includes(this.state.genre);
    }

    /* Checks if a movie is found and the cover is available. Prevents adult movies and movies shorter than 60 minutes. */
    validMovie(movie) {
        return movie.status_code !== 34
            && movie.runtime >= 60 && movie.poster_path !== null
            && movie.adult === false
            && movie.vote_average > this.state.imdb;
    }

    /* Fetches a movie when the "RANDOM MOVIE" is clicked */
    onGO = async () => {
        this.setState({ clicked: true });
        this.getMaxId();
        const query = `${this.apiUrl}${this.randomNumber()}?api_key=${this.apiKey}`;
        fetch(query)
            .then(res => res.json())
            .then((data) => {
                if (this.validMovie(data) && (this.state.genre === "Any" || this.validGenre(data.genres))) {
                    this.setState({
                        movie: data,
                        clicked: false
                    });
                } else {
                    this.onGO();
                }
            });
    };

    /* Displays the chosen movie when its found */
    onRender = (res) => {

        let genres = res.genres.map(genre => (genre.name) + " ");
        let year = (res.release_date).substring(0, 4);
        let hours = Math.floor(res.runtime / 60);
        let mins = res.runtime % 60;


        return (
            <div class="css-right">
                <div class="css-cover-container">
                    <div class="css-cover-fill">
                        <img src={this.imageUrl + res.poster_path} class="css-cover" alt="" />
                    </div>
                </div>
                <div class="css-info">
                    <h2>{res.title}</h2>
                    <div class="css-movie-stats">
                        <span>{year}</span>
                        <span>IMDB: {res.vote_average}/10</span>
                        <span>{hours}h {mins}m</span>
                        <span>{genres}</span>
                    </div>
                    <div class="css-overview">
                        {res.overview}
                    </div>
                </div>
            </div>);
    };

    /* Event listener to save the chosen IMDB-rating value */
    handleImdb = event => {
        this.setState({
            imdb: event.target.value
        });
    };

    /* Event listener to save the chosen genre value */
    handleGenre = event => {
        this.setState({
            genre: event.target.value
        });
    };

    render() {
        this.getGenres();
        return (
            <div class="css-box">
                <div class="css-left">
                    <div class="css-imdb-rating">
                        <p>GENRE</p>
                        <div>
                            <div class="css-select">
                                <select onChange={this.handleGenre} >
                                    <option value="Any">Any</option>
                                    {(this.state.genres.map((genre, i) => { return (<option key={i} value={genre}>{genre}</option>); }))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="css-imdb-rating" style={{ paddingBottom: '2em' }}>
                        <p>IMDB</p>
                        <div>
                            <div class="css-select">
                                <select onChange={this.handleImdb} >
                                    <option value="0">Any score</option>
                                    <option value="9">9 ></option>
                                    <option value="8">8 ></option>
                                    <option value="7">7 ></option>
                                    <option value="6">6 ></option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <button class="button-css" onClick={this.onGO}>RANDOM MOVIE</button>
                </div>
                <div class="css-entrybox">
                    {/* Displaying either a welcome text, a loading-spinner or a movie depending on the states of the component */}
                    {this.state.movie ?
                        this.state.clicked ?
                            <div class="css-entry">
                                <Spinner />
                            </div> :
                            this.onRender(this.state.movie) :
                        <div class="css-entry">
                            {this.state.clicked ? <Spinner /> : <p>What are you waiting for? Smash that button.</p>}
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default Movie;