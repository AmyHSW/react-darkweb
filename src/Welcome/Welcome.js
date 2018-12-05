import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Welcome.css'

class Welcome extends Component {
  render() {
    return (
      <Link to="/list">
        <h1>Welcome to Dark Web</h1>
      </Link>
    );
  }
}

export default Welcome;