export function appReducer(
  state={
    teams: [],
    selectedPlayer: null
  }, action) {
  switch (action.type) {
    case 'ADD_TEAMS':
      return { ...state, teams: action.payload }
    case 'SELECT_PLAYER':
      return { ...state, selectedPlayer: action.payload }
    default:
      return state;
  }
};
