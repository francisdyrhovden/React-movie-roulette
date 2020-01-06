import React from 'react';
import './App.css';
import './desc.css';
import { Layout, Header, Content, Grid, Cell } from 'react-mdl';
//import Checkbox from '@material-ui/core/Checkbox';


function App() {
    return (
        <div>
            <Layout>
                <Header class="header-color" title="Movie roulette" scroll>
                </Header>
                <Content>
                    <div class="landing-body">

                        <div class="css-desc">
                            <h2>Movie Roulette: What to watch?</h2>
                            <p>If you're wondering what movie or TV show you
                                should watch next, use the randomizer below.</p>
                        </div>

                        <div class="css-box">
                            <div class="css-left">
                                <button class="button-css">GO</button>
                            </div>
                            <div class="css-right">
                                <div class="css-result">
                                    <p>Let fate take the wheel... Have a spin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default App;