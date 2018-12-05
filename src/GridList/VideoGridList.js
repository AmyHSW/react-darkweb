import React, { Component } from 'react';
import { Link } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {TileData} from "./TileData";

class VideoGridList extends Component {
  render() {
    return (
      <div className="root">
        <GridList cellHeight={180} className="gridList" cols={4}>
          {TileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <Link to={{
                pathname: '/video',
                state: {
                  source: tile.video
                }
              }}>
                <img src={tile.img} alt={tile.title} />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default VideoGridList;
