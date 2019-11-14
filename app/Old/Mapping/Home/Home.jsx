import * as React from 'react';
import '../App.css';

const logo = require('./logo.svg');

class Home extends React.Component{
    constructor(Props) {
        console.log('Home Props', Props);
        super(Props);
        this.state = {
            height: window.innerWidth,
            width: window.innerHeight,
        };
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome</h1>
                </header>
                <p className="App-intro">To get started, edit <code>src/App.tsx</code> and save to reload.</p>
                <p>this window is {this.state.height} pixels high</p>
                <p>and {this.state.width} pixels wide</p>
            </div>
        );
    }
}
export default Home;