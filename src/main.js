import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

export class Main extends Component {

    render() {
        return (
            <div class="background">
                <div class="css-layout">
                    <div class="css-desc">
                        <h2>Movie Roulette: What to watch?</h2>
                        <p>
                            Do you spend a lot of time searching for a movie rather than watching the movie itself?
                            Well then you have come to the right place. Use the randomize button below and we´ll
                            handpick a movie for you from among 600 000+ movies. You´re welcome.
                        </p>
                    </div>
                    <Movie />
                </div>
            </div>
        )
    }
}

export default Main;
