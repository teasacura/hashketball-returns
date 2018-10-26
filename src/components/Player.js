import React from 'react'
import { connect } from 'react-redux';
import { selectPlayer } from '../actions/items';

const Player = (props) => {
  return (
    <div onClick={() => props.selectPlayer(props.player)}>
      <p>{props.player.name}</p>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    selectPlayer: (player) => {
      dispatch(selectPlayer(player))
    }
  }
};


export default connect(null, mapDispatchToProps)(Player);
