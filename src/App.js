import React from 'react';
import './App.css';
import { Layout, Header, Content, Grid, Cell } from 'react-mdl';
import Checkbox from '@material-ui/core/Checkbox';


function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Movie roulette" scroll>
                </Header>
                <Content>
                    <div className="landing-body">   
                        <div className="banner-text">   
                            <button className="button-css">GO</button>
                        </div>                               
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default App;