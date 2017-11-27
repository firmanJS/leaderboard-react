import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
  render() {
    return (
      <div>
        {this.props.members.map( (player) => {
          return (
            <Player key={player.id} name={player.name} score={player.score} />
          )
        })}
      </div>
    );
  }
}

export default Players
