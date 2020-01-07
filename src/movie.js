import React, { Component } from 'react';
import './App.css';
import './desc.css';


class Movie extends Component {
    
    apiUrl = 'https://api.themoviedb.org/3/movie/';
    apiKey = '4b7b3970bdc784da1f0944241ca24bf9';
    imageUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
    state = { query: '', movie: '' };
  
    onGO = async () => {
        const query = `${this.apiUrl}${550}?api_key=${this.apiKey}`;

        let paths = [];
        fetch(query)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    movie: data
                });
            });
    };

    onRender = (res) => {
        return (
            <div>
                <img src={this.imageUrl + res.poster_path} />
                <h3>{res.title}</h3>
            </div>);
    };

    render() {
        return (
            <div class="css-box">
            <div class="css-left">
                        <button class="button-css" onClick={this.onGO}>GO</button>
                    </div>
                    <div class="css-right">
                        <div class="css-result">
                        <div>{this.onRender(this.state.movie)}</div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Movie;