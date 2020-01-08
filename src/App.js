import React from 'react';
import './App.css';
import { Layout, Header, Content } from 'react-mdl';
import Main from './main';



function App() {

    return (
        <div>
            <Layout>
                <Header class="header-color" title="" scroll>
                </Header>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;