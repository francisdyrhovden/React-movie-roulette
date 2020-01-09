import React, { Component } from 'react';
import './App.css';


class Movie extends Component {

    apiUrl = 'https://api.themoviedb.org/3/movie/';
    apiKey = '4b7b3970bdc784da1f0944241ca24bf9';
    imageUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
    state = { movie: '' };

    getMaxId() {
        fetch(`${this.apiUrl}latest?api_key=${this.apiKey}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    maxId: data.id
                });
            });
    }

    randomNumber() {
        const min = 1;
        let max = this.state.maxId;
        console.log("MaxId: " + max);
        const rand = min + Math.floor(Math.random() * (max - min));
        console.log("RandomId: " + rand);
        return rand;
    }

    onGO = async () => {
        this.getMaxId();
        const query = `${this.apiUrl}${this.randomNumber()}?api_key=${this.apiKey}`;
        fetch(query)
            .then(res => res.json())
            .then((data) => {
                console.log("StatusCode: " + data.status_code);
                if (data.status_code !== 34) {
                    this.setState({
                        movie: data
                    });
                } else {
                    this.onGO();
                }
            });
    };

    onRender = (res) => {

        let year = (res.release_date).substring(0, 4);
        let genres = res.genres.map(genre => (genre.name) + " ");
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
                    <h3>{res.title}</h3>
                    <div class="css-movie-stats">
                        <span>{year}</span>
                        <span>IMDB: {res.vote_average}/10</span>
                        <span>{hours}h {mins}m</span>
                        <span>{genres}</span>
                    </div>
                    <div class="css-overview">
                        <p>{res.overview}</p>
                    </div>
                </div>
            </div>);
    };

    render() {
        return (
            <div class="css-box">
                <div class="css-left">
                    <button class="button-css" onClick={this.onGO}>RANDOM MOVIE</button>
                </div>
                <div class="css-entrybox">
                    {this.state.movie ? this.onRender(this.state.movie) :
                        <div class="css-entry">
                            What are you waiting for? Smash that button.
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default Movie;