import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Home from "./Home/Home";
import Welcome from "./Welcome/Welcome";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/list' component={Home}/>
      <Route path='/video' component={VideoPlayer}/>
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
