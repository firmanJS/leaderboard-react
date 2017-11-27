import React, { Component } from 'react';

class Player extends Component {
  constructor(props){
    super(props)
    this.state = {
      score : this.props.score
    }
    this.incrementScorePlus = this.incrementScorePlus.bind(this)
    this.incrementScoreMin = this.incrementScoreMin.bind(this)
  }
  incrementScorePlus(event){
    this.setState({
      score:this.state.score + 10
    })
  }
  incrementScoreMin(event){
    this.setState({
      score:this.state.score - 10
    })
  }
  render() {
    const styles = {
      player:{
        display:'flex',
        padding:10
      },
      name:{
        flex:1
      },
      PlayerScore:{
        width:200
      },
      score:{
        padding:20
      },
      button:{
        padding:20
      }
    }
    return(
      <div style={styles.player}>
        <div style={styles.name}>
          {this.props.name}
        </div>
        <div style={styles.PlayerScore}>
          <button onClick= {this.incrementScoreMin} style={styles.button}>-</button>
          <span style={styles.score}>{this.state.score}</span>
          <button onClick= {this.incrementScorePlus} style={styles.button}>+</button>
        </div>
      </div>
    )
  }
}

export default Player
