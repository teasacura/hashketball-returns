import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import { connect } from 'react-redux';
import { addTeams } from './actions/items';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {

  componentDidMount(){
    this.props.addTeams(gamesData.teams)
  }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <TeamList teams={this.props.teams} />
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams,
    selectedPlayer: state.selectedPlayer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTeams: (teams) => {
      dispatch(addTeams(teams))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
