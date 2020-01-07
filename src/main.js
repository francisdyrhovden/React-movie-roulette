import React, { Component } from 'react';
import './App.css';
import './desc.css';
import Movie from './movie';

export class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="background">

                <div class="css-desc">
                    <h2>Movie Roulette: What to watch?</h2>
                    <p>If you're wondering what movie or TV show you
                    should watch next, use the randomizer below.</p>
                </div>
                <Movie />
            </div>
        )
    }
}

export default Main;
