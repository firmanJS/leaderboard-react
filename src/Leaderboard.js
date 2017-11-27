import React, { Component } from 'react';
import Players from './Players';
import AddPlayers from './AddPlayers';

class Leaderboard extends Component {
  constructor(props){
    super(props)
    const PLAYERS = [
      {id:1,name:"Firman",score:30},
      {id:2,name:"Depa",score:20},
      {id:3,name:"Ali",score:10}
    ]
    this.state = {
      members : PLAYERS
    }
    this.onPlayerAdd = this.onPlayerAdd.bind(this)
  }
  onPlayerAdd(name){
    let new_members = this.state.members
    new_members.push({id:new_members.length + 1,name:name,score:10})
    this.setState({
      members:new_members
    })
  }
  render() {
    const styles = {
      container : {
        padding : 60
      }
    }
    return (
      <div style={styles.container}>
        <h1>Leaderboard</h1>
        <Players members={this.state.members}/>
        <AddPlayers onAdd={this.onPlayerAdd}/>
      </div>
    );
  }
}

export default Leaderboard
