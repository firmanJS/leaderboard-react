import React, { Component } from 'react';

class AddPlayers extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:""
    }
    this.OnePlayerChange = this.OnePlayerChange.bind(this)
    this.AddPlayer = this.AddPlayer.bind(this)
  }
  OnePlayerChange(e){
    this.setState({
      name:e.target.value
    })
  }
  AddPlayer(e){
    this.props.onAdd(this.state.name)
    this.setState({
      name:""
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.OnePlayerChange} type="text" placeholder="input text here.."
          value={this.state.name}></input>
        <button onClick={this.AddPlayer}>Add Player</button>
      </div>
    )
  }
}

export default AddPlayers
