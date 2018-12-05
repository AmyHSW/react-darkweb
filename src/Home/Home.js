import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

// sources for test
const SOURCES = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  empty: ''
};

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="blink">
          <span className="span">Dark Web</span>
        </div>
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<VideoGridList />*/}
        <br/>
        <br/>
        <Row>
          <Col xs>
            <VideoPlayer source={SOURCES.bunnyMovie} />
            <Link to={{
              pathname: '/video',
              state: {
                source: SOURCES.bunnyMovie
              }
            }}>bunny bunny dance</Link>
          </Col>
          <Col xs>
            <VideoPlayer source={SOURCES.sintelTrailer} />
            <Link to={{
              pathname: '/video',
              state: {
                source: SOURCES.bunnyMovie
              }
            }}>Video Title</Link>
          </Col>
          <Col xs>
            <VideoPlayer source={SOURCES.bunnyTrailer} />
            <Link to={{
              pathname: '/video',
              state: {
                source: SOURCES.bunnyMovie
              }
            }}>Video Title</Link>
          </Col>
        </Row>
          <Row>
            <Col xs>
              <VideoPlayer source={SOURCES.bunnyTrailer} />
              <Link to={{
                pathname: '/video',
                state: {
                  source: SOURCES.bunnyMovie
                }
              }}>Video Title</Link>
            </Col>
            <Col xs>
              <VideoPlayer source={SOURCES.bunnyMovie} />
              <Link to={{
                pathname: '/video',
                state: {
                  source: SOURCES.bunnyMovie
                }
              }}>Video Title</Link>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Home;
